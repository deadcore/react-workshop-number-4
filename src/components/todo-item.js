import React, { Component } from 'react';
import FaceIcon from '@material-ui/icons/Face'
import Divider from '@material-ui/core/Divider/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';

const styles = theme => ({
  section: {
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    flex: 1
  }
});

class TodoItem extends Component {

  render() {
    const {classes} = this.props;

    return (
        <>
          <section className={classes.section}>
            <Typography className={classes.text}>
              {this.props.children}
            </Typography>
            <IconButton>
              <FaceIcon/>
            </IconButton>
          </section>
          <Divider/>
        </>
    )
  }

}

export default withStyles(styles)(TodoItem)