import type { CompressedType, CompressedTypeMap, LinkedArgMap, LinkedType, LinkedTypeMap } from '../types';
import assign from 'lodash.assign';

export interface PartialLinkedFieldMap {
  [field: string]: {
    type: string;
    args?: LinkedArgMap;
  };
}

export function linkTypeMap(typeMap: CompressedTypeMap<number>): LinkedTypeMap {
  const indexToName: Record<number, string> = assign({}, ...Object.keys(typeMap.types).map((k, i) => ({ [i]: k })));

  // add the name value
  let intermediaryTypeMap = assign(
    {},
    ...Object.keys(typeMap.types || {}).map((k): Record<string, LinkedType> => {
      const type: CompressedType = typeMap.types[k];
      const fields = type || {};
      // processFields(fields, indexToName)
      return {
        [k]: {
          name: k,
          // type scalar properties
          scalar: Object.keys(fields).filter((f) => {
            const [type] = fields[f] ?? [];
            if (!type && type !== 0) {
              return false;
            }
            return typeMap.scalars.includes(type);
          }),
          // fields with corresponding `type` and `args`
          fields: assign(
            {},
            ...Object.keys(fields).map((f): PartialLinkedFieldMap => {
              const [typeIndex, args] = fields[f] ?? [];
              if (!typeIndex && typeIndex !== 0) {
                return {};
              }
              return {
                [f]: {
                  // replace index with type name
                  type: indexToName[typeIndex],
                  args: assign(
                    {},
                    ...Object.keys(args ?? {}).map((k) => {
                      if (!args || !args[k]) {
                        return {};
                      }
                      // if argTypeString == argTypeName, argTypeString is missing, need to read it
                      const [argTypeName, argTypeString] = args[k] ?? [];
                      if (!argTypeName && argTypeName !== 0) {
                        return {};
                      }
                      return {
                        [k]: [indexToName[argTypeName], argTypeString || indexToName[argTypeName]],
                      };
                    }),
                  ),
                },
              };
            }),
          ),
        },
      };
    }),
  );
  const res = resolveConcreteTypes(intermediaryTypeMap);
  return res;
}

// replace typename with concrete type
export const resolveConcreteTypes = (linkedTypeMap: LinkedTypeMap) => {
  Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
    const type = linkedTypeMap[typeNameFromKey];
    // type.name = typeNameFromKey
    if (!type?.fields) {
      return;
    }

    const fields = type.fields;

    Object.keys(fields).forEach((f) => {
      const field = fields[f];

      if (field?.args) {
        const args = field.args;
        Object.keys(args).forEach((key) => {
          const arg = args[key];

          if (arg) {
            const [typeName] = arg;

            if (typeof typeName === 'string') {
              if (!linkedTypeMap[typeName]) {
                linkedTypeMap[typeName] = { name: typeName };
              }

              arg[0] = linkedTypeMap[typeName] as LinkedType;
            }
          }
        });
      }

      const typeName = field?.type as LinkedType | string;

      if (field?.type && typeof typeName === 'string') {
        if (!linkedTypeMap[typeName]) {
          linkedTypeMap[typeName] = { name: typeName };
        }

        field.type = linkedTypeMap[typeName] as LinkedType;
      }
    });
  });

  return linkedTypeMap;
};
