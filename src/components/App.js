import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import Navbar from './Navbar';
import Theme from '../Theme';
import HomeSection from './HomeSection';
import ServicesSection from './ServicesSection';
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

            <HomeSection />
            <ServicesSection />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;