import React, { Component } from 'react';
import TodoPage from './pages/todo.page';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo'

export class App extends Component {

  state = {
    client: null
  };

  async componentDidMount() {
    const apolloClient = await client();

    this.setState({
      client: apolloClient
    })
  }

  render() {

    if (!this.state.client) {
      return (
          <div>Loading...</div>
      )
    }

    return (
        <ApolloProvider client={this.state.client}>
          <TodoPage/>
        </ApolloProvider>
    )
  }
}

export default App