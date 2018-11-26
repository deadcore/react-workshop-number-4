import React from 'react';
import TodoPage from './pages/todo.page';
import { ApolloProvider } from 'react-apollo';
import client from './apollo'

const App = () => (
    <ApolloProvider client={client}>
      <TodoPage/>
    </ApolloProvider>
);

export default App