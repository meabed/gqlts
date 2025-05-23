import { type LinkedType } from '../types';
import { getFieldFromPath } from './getFieldFromPath';

export interface Args {
  [arg: string]: any | undefined;
}

export interface Fields {
  [field: string]: Request;
}

export type Request = boolean | number | Fields | [Args, Fields?];

export interface Variables {
  [name: string]: {
    value: any;
    typing: [LinkedType, string];
  };
}

export interface Context {
  root: LinkedType;
  varCounter: number;
  variables: Variables;
  fragmentCounter: number;
  fragments: string[];
}

export interface GraphqlOperation {
  query: string;
  variables: Record<string, unknown>;
}

export interface ParseRequestOptions {
  skipTypingCheck?: boolean;
}

function parseRequest(request: Request | undefined, ctx: Context, path: string[], opt?: ParseRequestOptions): string {
  if (Array.isArray(request)) {
    const [args, fields] = request;
    const argNames = Object.keys(args);

    if (argNames.length === 0) {
      return parseRequest(fields, ctx, path, opt);
    }

    const field = getFieldFromPath(ctx.root, path);

    return `(${argNames.map((argName) => {
      ctx.varCounter++;
      const varName = `v${ctx.varCounter}`;

      const typing = field.args && field.args[argName];

      if (!typing && !opt?.skipTypingCheck) {
        throw new Error(`No typing defined for argument \`${argName}\` in path \`${path.join('.')}\``);
      }

      let varType = typing;
      const value = args?.[argName];

      let inferredTypeFromValue: string | undefined;
      // Check if the value is not undefined and if the type is not defined
      if (opt?.skipTypingCheck && !typing) {
        const valueType = typeof value;
        switch (valueType) {
          case 'string':
            inferredTypeFromValue = 'String';
            break;
          case 'number':
            inferredTypeFromValue = 'Int';
            break;
          case 'boolean':
            inferredTypeFromValue = 'Boolean';
            break;
          case 'object':
            if (value === null) {
              inferredTypeFromValue = 'Null';
            } else if (Array.isArray(value)) {
              inferredTypeFromValue = '[String]'; // Assuming array of strings for simplicity
            } else {
              inferredTypeFromValue = 'Object';
            }
            break;
        }
        if (!inferredTypeFromValue) {
          throw new Error(`No typing defined for argument \`${argName}\` in path \`${path.join('.')}\``);
        }
        varType = varType || [{ name: inferredTypeFromValue!, scalar: [], fields: {} }, inferredTypeFromValue];
        console.warn(
          `Infer type for argument \`${argName}\` in path \`${path.join('.')}\` as \`${inferredTypeFromValue}\` - consider adding typing and updating the schema`,
        );
      }

      ctx.variables[varName] = {
        value: value,
        typing: varType!,
      };

      return `${argName}:$${varName}`;
    })})${parseRequest(fields, ctx, path, opt)}`;
  } else if (typeof request === 'object' && request !== null) {
    const fields = request;
    const fieldNames = Object.keys(fields).filter((k) => Boolean(fields[k]));

    if (fieldNames.length === 0) {
      throw new Error('Field selection should not be empty');
    }

    const type = path.length > 0 ? getFieldFromPath(ctx.root, path).type : ctx.root;
    const scalarFields = type.scalar;

    let scalarFieldsFragment: string | undefined;

    if (fieldNames.includes('__scalar')) {
      const falsyFieldNames = new Set(Object.keys(fields).filter((k) => !Boolean(fields[k])));
      if (scalarFields?.length) {
        ctx.fragmentCounter++;
        scalarFieldsFragment = `f${ctx.fragmentCounter}`;

        ctx.fragments.push(
          `fragment ${scalarFieldsFragment} on ${type.name}{${scalarFields
            .filter((f) => !falsyFieldNames.has(f))
            .join(',')}}`,
        );
      }
    }

    const fieldsSelection = fieldNames
      .filter((f) => !['__scalar', '__name'].includes(f))
      .map((f) => {
        const parsed = parseRequest(fields[f], ctx, [...path, f], opt);

        if (f.startsWith('on_')) {
          ctx.fragmentCounter++;
          const implementationFragment = `f${ctx.fragmentCounter}`;

          const typeMatch = f.match(/^on_(.+)/);

          if (!typeMatch || !typeMatch[1]) throw new Error(`Invalid fragment type in field: ${f}`);

          ctx.fragments.push(`fragment ${implementationFragment} on ${typeMatch[1]}${parsed}`);

          return `...${implementationFragment}`;
        } else {
          return `${f}${parsed}`;
        }
      })
      .concat(scalarFieldsFragment ? [`...${scalarFieldsFragment}`] : [])
      .join(',');

    return `{${fieldsSelection}}`;
  } else {
    return '';
  }
}

export function generateGraphqlOperation(
  operation: 'query' | 'mutation' | 'subscription',
  root: LinkedType,
  fields: Fields,
  opt?: ParseRequestOptions,
): GraphqlOperation {
  const ctx: Context = {
    root,
    varCounter: 0,
    variables: {},
    fragmentCounter: 0,
    fragments: [],
  };
  const result = parseRequest(fields, ctx, [], opt);

  const varNames = Object.keys(ctx.variables);

  const varsString =
    varNames.length > 0
      ? `(${varNames.map((v) => {
          const variableType = ctx.variables[v].typing[1];
          return `$${v}:${variableType}`;
        })})`
      : '';

  const operationName = fields.__name || '';

  return {
    query: [`${operation} ${operationName}${varsString}${result}`, ...ctx.fragments].join(','),
    variables: Object.keys(ctx.variables).reduce<Record<string, unknown>>((r, v) => {
      r[v] = ctx.variables[v].value;
      return r;
    }, {}),
  };
}
