import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import { hot } from 'react-hot-loader'
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";
import ReviewsSection from './ReviewsSection';
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ReactGA from 'react-ga';

class App extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    ReactGA.initialize('UA-126977160-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Navbar />

        <HomeSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </Fragment>
    );
  }
}

export default hot(module)(App);