import { RenderContext } from '../common/RenderContext';
import { isEmpty } from './support';
import { ArgMap, Field, FieldMap } from '@gqlts/runtime/dist/types';
import {
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  getNamedType,
  isInterfaceType,
} from 'graphql';

export function objectType(
  type: GraphQLObjectType | GraphQLInterfaceType | GraphQLInputObjectType,
  ctx: RenderContext,
) {
  const typeObj: FieldMap<string> = Object.keys(type.getFields()).reduce((r, f) => {
    const field = type.getFields()[f];
    const namedType = getNamedType(field.type);
    const fieldObj: Field<string> = { type: namedType.name };
    r[f] = fieldObj;

    const args = (field as GraphQLField<any, any>).args || [];

    if (args.length > 0) {
      fieldObj.args = args.reduce((r, a) => {
        const concreteType = a.type.toString();
        const typename = getNamedType(a.type).name;
        r[a.name] = [typename];
        if (typename !== concreteType) {
          r[a.name]?.push(concreteType);
        }
        return r;
      }, {}) as ArgMap<string>;
    }

    return r;
  }, {}) as FieldMap<string>;

  if (isInterfaceType(type) && ctx.schema) {
    ctx.schema.getPossibleTypes(type).map((t) => {
      if (!isEmpty(typeObj)) {
        typeObj[`on_${t.name}`] = { type: t.name };
      }
    });
  }

  if (!isEmpty(typeObj)) {
    typeObj.__typename = { type: 'String' };
  }

  // const scalar = Object.keys(type.getFields())
  //   .map(f => type.getFields()[f])
  //   .filter(f => isScalarType(getNamedType(f.type)) || isEnumType(getNamedType(f.type)))
  //   .map(f => f.name)

  // if (scalar.length > 0) typeObj.scalar = scalar

  return typeObj;
}
