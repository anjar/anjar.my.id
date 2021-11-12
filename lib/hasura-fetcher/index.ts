/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLClient, request } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

const gqlEnpoint = process.env.NEXT_PUBLIC_GQL_ENDPOINT || 'https://gql.anjar.fun/v1/graphql';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const fetcher = (query: RequestDocument) => request(gqlEnpoint, query);

const adminSecret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '';

type mutateProps = {
  query: string
  variables: any
}
export const mutation = async ({ query, variables }: mutateProps): Promise<any> => {
  const graphQLClient = new GraphQLClient(gqlEnpoint, {
    headers: {
      'x-hasura-admin-secret': adminSecret,
    },
  });

  const data = await graphQLClient.request(query, variables);
  return data;
};

export default fetcher;
