import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

const gqlEnpoint = process.env.NEXT_PUBLIC_GITHUB_GQL || 'https://api.github.com/graphql';
const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
const adminSecret = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || '';

type mutateProps = {
  query: string
  variables: any
}

const fetcher = async (query: RequestDocument): Promise<any> => {
  const graphQLClient = new GraphQLClient(gqlEnpoint, {
    headers: {
      authorization: `bearer ${githubToken}`,
    },
  });

  const data = await graphQLClient.request(query);
  return data;
};

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
