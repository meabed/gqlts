import { IGraphQLContext } from './graphql-context';
import { Plugin } from 'graphql-yoga';
import { v4 as uuidv4 } from 'uuid';

export const useGraphqlAppExtension: Plugin<IGraphQLContext> = {
  onExecute() {
    return {
      onExecuteDone(params) {
        const { result, setResult, args } = params;
        const { contextValue: context } = args;
        const { res, req } = context as IGraphQLContext;
        const runtime = Date.now() - context.startTime;
        const requestId = req.requestId ?? (req.headers['x-request-id'] as string) ?? uuidv4();
        res?.setHeader('x-request-id', requestId);
        res?.setHeader('x-runtime', runtime);

        result['extensions'] = result['extensions'] ?? {};
        result['extensions']['requestId'] = requestId;
        result['extensions']['runtime'] = runtime;

        setResult(result);
        return;
      },
    };
  },
};
