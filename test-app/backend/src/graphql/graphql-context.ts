import { Request, Response } from 'express';

export interface IGraphQLContext {
  req: Request;
  res: Response;
  startTime: number;
}
