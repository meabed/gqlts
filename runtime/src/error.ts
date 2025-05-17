/**
 * Represents a GraphQL error from the client
 */
export class ClientError extends Error {
  public readonly errors?: readonly Error[];

  constructor(errors?: readonly Error[]) {
    const message = ClientError.extractMessage(errors);
    super(errors ? `${message}\n${errors.map((error) => JSON.stringify(error, null, 2)).join('\n')}` : message);

    this.name = 'ClientError';
    this.errors = errors;

    Object.setPrototypeOf(this, ClientError.prototype);
    if (Error.captureStackTrace) Error.captureStackTrace(this, ClientError);
  }

  private static extractMessage(errors: readonly Error[] | undefined): string {
    try {
      return errors?.[0]?.message || 'GraphQL Error';
    } catch (e) {
      return 'GraphQL Error';
    }
  }
}
