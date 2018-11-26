import React from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button/Button';
import AddIcon from '@material-ui/icons/Add';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TodoItem from '../components/todo-item';

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

const TodoPage = ({classes}) => (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Query query={GET_TODOS}>
          {({data}) => (
              data.todos.map(({id, body}) => (
                  <TodoItem key={id}>
                    {body}
                  </TodoItem>
              ))
          )}
        </Query>

        <Button variant='fab' color='primary' className={classes.addButton}>
          <AddIcon/>
        </Button>
      </Paper>
    </main>
);

export default withStyles(styles)(TodoPage);
