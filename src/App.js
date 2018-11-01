import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TodoItem from './components/todo-item';
import Button from '@material-ui/core/Button/Button';
import AddIcon from '@material-ui/icons/Add';

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

const predefinedTodos = [
  'Cookie jelly beans cotton candy cheesecake macaroon sugar plum wafer biscuit',
  'Pudding gummies donut macaroon pudding fruitcake tart candy canes',
  'Powder lollipop fruitcake biscuit lemon drops danish. Oat cake cake cake cheesecake caramels pudding',
  'Brownie wafer chocolate cake cotton candy tootsie roll chupa chups jelly beans croissant. ',
  'Croissant gummi bears bear claw danish. Pie icing chupa chups oat cake sesame snaps sugar plum chocolate.',
  'Pudding icing tootsie roll biscuit bear claw pie candy gummi bears',
  'Fruitcake lollipop caramels tart brownie cupcake macaroon',
  'Jelly beans tiramisu cheesecake powder candy canes jelly beans lemon drops topping',
  'Cotton candy halvah wafer gingerbread ice cream gingerbread chocolate bar icing muffin',
  'Icing sweet roll chocolate soufflé marshmallow chupa chups cake jelly gummies'
];

class App extends Component {

  state = {
    todos: []
  };

  onClick = () => {
    this.setState((state, props) => {

      const newTodo = predefinedTodos[Math.floor(Math.random() * predefinedTodos.length)];

      const updatedTodos = [...state.todos, newTodo];

      return {
        todos: updatedTodos
      };
    });
  };

  onDelete = () => {
    alert('Delete an Item next week')
  };

  render() {
    const {classes} = this.props;

    return (
        <main className={classes.main}>
          <Paper className={classes.paper}>
            {this.state.todos.map(todo => (
                <TodoItem onDelete={this.onDelete}>{todo}</TodoItem>
            ))}
            <Button variant='fab' color='primary' className={classes.addButton} onClick={this.onClick}>
              <AddIcon/>
            </Button>
          </Paper>
        </main>
    );
  }
}

export default withStyles(styles)(App);
