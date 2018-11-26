import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import defaults from './defaults'
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults
});

const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([
      stateLink
  ])
});

export default apolloClient;