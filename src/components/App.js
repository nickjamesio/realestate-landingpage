import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import Navbar from './Navbar';
import Theme from '../Theme';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
          <Fragment>
            <Navbar />

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/contact' component={ContactPage} />
            </Switch>            
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;