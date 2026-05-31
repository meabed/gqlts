export interface ArgMap<keyType = number> {
  [arg: string]: [keyType, string] | [keyType] | undefined;
}

export type CompressedField<keyType = number> = [type: keyType, args?: ArgMap<keyType>];

export interface CompressedFieldMap<keyType = number> {
  [field: string]: CompressedField<keyType> | undefined;
}

export interface CompressedTypeMap<keyType = number> {
  scalars: Array<keyType>;
  types: {
    [type: string]: CompressedFieldMap<keyType>;
  };
}

export type Field<keyType = number> = {
  type: keyType;
  args?: ArgMap<keyType>;
};

export interface FieldMap<keyType = number> {
  [field: string]: Field<keyType> | undefined;
}

export type Type<keyType = number> = FieldMap<keyType>;

export interface TypeMap<keyType = number> {
  scalars: Array<keyType>;
  types: {
    [type: string]: Type<keyType> | undefined;
  };
}
