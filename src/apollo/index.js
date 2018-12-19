import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import defaults from './defaults';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import resolvers from './resolvers';
import { persistCache } from 'apollo-cache-persist';

export const client = async () => {

  const cache = new InMemoryCache();

  const stateLink = withClientState({
    cache,
    defaults,
    resolvers
  });

  const apolloClient = new ApolloClient({
    cache,
    link: ApolloLink.from([
      stateLink
    ])
  });

  await persistCache({
    cache,
    storage: window.localStorage
  });

  return apolloClient;

};
