import React, { Component, Fragment } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Navbar from "./Navbar";
import Theme from "../Theme";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";
import ReviewsSection from './ReviewsSection';
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-126977160-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Fragment>
          <Navbar />

          <HomeSection />
          <ServicesSection />
          <ReviewsSection />
          <AboutSection />
          <ContactSection />
          
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
