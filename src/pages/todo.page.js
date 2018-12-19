import React from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import TodoItem from '../components/todo-item';
import Button from '@material-ui/core/Button/Button';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2
  },
  paper: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing.unit * 2
  },
  addButton: {
    alignSelf: 'center',
    marginBottom: -44
  }
});

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      body
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($body: String!) {
    addTodo(body: $body) @client {
      id
      body
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) @client
  }
`;

const TodoPage = ({classes}) => (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Mutation mutation={DELETE_TODO}>
          {
            deleteTodo => (
                <Query query={GET_TODOS}>
                  {({data}) => (
                      data.todos.map(({id, body}) => (
                          <TodoItem key={id} onDelete={() => {
                            deleteTodo({variables: {id}})
                          }}>
                            {body}
                          </TodoItem>
                      ))
                  )}
                </Query>
            )}
        </Mutation>

        <Mutation mutation={ADD_TODO}>
          {
            (addTodo) => (
                <Button variant='fab' color='primary' className={classes.addButton} onClick={() => {
                  addTodo({variables: {body: 'Jack'}})
                }}>
                  <AddIcon/>
                </Button>
            )
          }
        </Mutation>
      </Paper>
    </main>
);

export default withStyles(styles)(TodoPage);
