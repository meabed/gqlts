import { IGraphQLContext } from './graphql-context';
import { ExecutionResult } from 'graphql';
import { Plugin } from 'graphql-yoga';
import { randomUUID } from 'node:crypto';

export const useGraphqlAppExtension: Plugin<IGraphQLContext> = {
  onExecute() {
    return {
      onExecuteDone(params) {
        const { result, setResult, args } = params;
        const { contextValue: context } = args;
        const { res, req } = context as IGraphQLContext;
        const runtime = Date.now() - context.startTime;
        const requestId = req.requestId ?? (req.headers['x-request-id'] as string) ?? randomUUID();
        res?.setHeader('x-request-id', requestId);
        res?.setHeader('x-runtime', runtime);

        if (Symbol.asyncIterator in Object(result)) {
          setResult(result);
          return;
        }

        const executionResult = result as ExecutionResult;
        executionResult.extensions = {
          ...executionResult.extensions,
          requestId,
          runtime,
        };

        setResult(executionResult);
        return;
      },
    };
  },
};
