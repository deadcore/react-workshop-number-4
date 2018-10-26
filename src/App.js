import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TodoItem from './components/todo-item';

const styles = theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2
  },
  paper: {
    'width': 400
  }
});

const todos = [
    'Pick up some bread',
    'Shout at Zoe',
    'Buy Zoe flowers',
    'Cook a make up dinner'
];

class App extends Component {
  render() {
    const {classes} = this.props;

    return (
        <main className={classes.main}>
          <Paper className={classes.paper}>
            {todos.map(todo => (
                <TodoItem>{todo}</TodoItem>
            ))}
          </Paper>
        </main>
    );
  }
}

export default withStyles(styles)(App);
