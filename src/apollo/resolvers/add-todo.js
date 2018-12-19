import gql from 'graphql-tag';
import uuid4 from 'uuid/v4'

export default (_, {body}, {cache}) => {

  const query = gql`
    query Todos {
      todos {
        id
        body
      }
    }
  `;

  const previousState = cache.readQuery({query});

  const todo = {
    __typename: 'Todo',
    id: uuid4(),
    body
  };

  const data = {
    todos: [...previousState.todos, todo]
  };

  cache.writeQuery({
    query,
    data
  });

  return todo;
}