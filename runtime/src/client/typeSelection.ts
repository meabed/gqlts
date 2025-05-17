// Type Selection System
// DST is the request type, SRC is the response type

type Scalar = string | number | Date | boolean | null | undefined;
type Anify<T> = { [P in keyof T]?: any };
type FieldsToRemove = '__isUnion' | '__scalar' | '__name';
type Nil = undefined | null;

/**
 * FieldsSelection is a recursive type that creates a response type based on request type and fields
 */
export type FieldsSelection<SRC extends Anify<DST> | undefined, DST> = {
  tuple: DST extends Nil ? never : DST extends readonly [any, infer PAYLOAD] ? FieldsSelection<SRC, PAYLOAD> : never;
  scalar: SRC;
  union: Handle__isUnion<SRC, DST>;
  object: HandleObject<SRC, DST>;
  array: SRC extends Nil ? never : SRC extends (infer T)[] ? Array<FieldsSelection<T, DST>> : never;
  __scalar: Handle__scalar<SRC, DST>;
  never: never;
}[DST extends Nil
  ? 'never'
  : SRC extends Nil
    ? 'never'
    : DST extends readonly [any, any]
      ? 'tuple'
      : DST extends false | 0
        ? 'never'
        : SRC extends Scalar
          ? 'scalar'
          : SRC extends any[]
            ? 'array'
            : SRC extends { __isUnion?: any }
              ? 'union'
              : DST extends { __scalar?: any }
                ? '__scalar'
                : DST extends {}
                  ? 'object'
                  : 'never'];

/**
 * HandleObject processes object types in the selection
 */
type HandleObject<SRC extends Anify<DST>, DST> = SRC extends Nil
  ? never
  : Pick<
      {
        // Using keyof SRC to maintain optional properties
        [Key in keyof SRC]: Key extends keyof DST
          ? FieldsSelection<NonNullable<SRC[Key]>, NonNullable<DST[Key]>>
          : SRC[Key];
      },
      Exclude<keyof DST, FieldsToRemove>
    >;

/**
 * Handle__scalar adds all scalar properties excluding non-scalar props
 */
type Handle__scalar<SRC extends Anify<DST>, DST> = SRC extends Nil
  ? never
  : Pick<
      // Continue processing fields that are in DST, directly pass SRC type if not in DST
      {
        [Key in keyof SRC]: Key extends keyof DST ? FieldsSelection<SRC[Key], DST[Key]> : SRC[Key];
      },
      // Remove fields that are not scalars or are not in DST
      {
        [Key in keyof SRC]: SRC[Key] extends Nil
          ? never
          : Key extends FieldsToRemove
            ? never
            : SRC[Key] extends Scalar
              ? Key
              : Key extends keyof DST
                ? Key
                : never;
      }[keyof SRC]
    >;

/**
 * Handle__isUnion processes union types in the selection
 */
type Handle__isUnion<SRC extends Anify<DST>, DST> = SRC extends Nil ? never : Omit<SRC, FieldsToRemove>;
