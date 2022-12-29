import { IncomingMessage, ServerResponse } from 'node:http';

export interface IGraphQLContext {
  req: IncomingMessage;
  res: ServerResponse;
  startTime: number;
}
