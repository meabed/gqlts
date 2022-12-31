import {
  mutation_root as Mutation,
  mutation_rootRequest as MutationRequest,
  query_root as Query,
  query_rootRequest as QueryRequest,
  subscription_root as Subscription,
  subscription_rootRequest as SubscriptionRequest,
  createClient,
} from './hasura';
import { ClientError, FieldsSelection } from '@gqlts/runtime';
import { useLazyPromise, useLazyPromiseOutput, useObservable } from 'react-extra-hooks';
import { UseObservableOutput } from 'react-extra-hooks/dist/useLazyObservable';
import useSWR, { SWRResponse } from 'swr';

const client = createClient({
  subscription: {
    url: 'wss://hasura-2334534.herokuapp.com/v1/graphql',
  },
});

export const useQuery = <R extends QueryRequest>(
  q: R,
  options = {}
): SWRResponse<FieldsSelection<Query, R>, ClientError> => {
  return useSWR<any>(JSON.stringify(q), {
    fetcher: (q) => q && client.query(JSON.parse(q)),

    ...options,
  });
};

export const useMutation = <
  R extends MutationRequest,
  ARG extends any[] = never[] // by default don't let pass any argument
>(
  q: R | ((...arg: ARG) => Promise<R>) // TODO react: the useQuery callback can be a non promise
): useLazyPromiseOutput<ARG, FieldsSelection<Mutation, R>> => {
  const [execute, res, bo] = useLazyPromise<any>(typeof q == 'function' ? q : (q) => q && client.mutation(q), {});
  return [typeof q == 'function' ? execute : () => execute(q), res, bo]; // TODO change result to data
  // TODO react: execute should not throw an error by default, too risky the dev will forget to handle it, just add an option to throw
};

export const useSubscription = <R extends SubscriptionRequest, ReducedType = FieldsSelection<Subscription, R>>(
  q: R,
  reducer: (acc: ReducedType, x: FieldsSelection<Subscription, R>) => ReducedType = (a, b) => b as any,
  accumulator?: ReducedType
): UseObservableOutput<ReducedType> => {
  return useObservable<any>((q) => client.subscription(q), {
    args: [q],
    reducer,
  });
};
