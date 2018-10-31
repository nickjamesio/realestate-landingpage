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
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <Fragment>
          <Navbar />

          <HomeSection />
          <ServicesSection />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
