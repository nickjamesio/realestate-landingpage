import React, { Component, Fragment } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scrol,
  scrollSpy,
  scroller
} from "react-scroll";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import Navbar from "./Navbar";
import Theme from "../Theme";
import HomeSection from "./HomeSection";
import ServicesSection from "./ServicesSection";
import ReviewsSection from './ReviewsSection';
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Fragment>
          <Navbar />

          <HomeSection />
          {/* <ServicesSection />
          <ReviewsSection />
          <AboutSection />
          <ContactSection /> */}
          
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
