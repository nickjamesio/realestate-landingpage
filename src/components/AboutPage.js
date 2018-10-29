import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Background from '../assets/images/house1.jpg';
import Realtor from '../assets/images/businesslady.png';

const styles = theme => ({
  root: {
    // width: '100%',
  },
});

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { classes } = this.props;

    return ( 
      <main className={classes.root}>
        <h1>About page</h1>
      </main>
    );
  }
}
 
export default withStyles(styles)(AboutPage);