import React, { Component } from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import Background from "../assets/images/house1.jpg";
import { BackgroundContainer } from "./Background";
import PageContent from "./PageContent";

const styles = theme => ({});

class ServicesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <Element name="services">
        <BackgroundContainer justify="center" src={Background}>
          <PageContent justify="center" alignItems="center">
            <h1>Services</h1>
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ServicesSection));
