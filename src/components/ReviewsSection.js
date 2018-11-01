import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid, Hidden, withStyles, Typography } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import { BackgroundContainer } from "./Background";
import PageContent from "./PageContent";

const headerSyles = theme => ({
  heading: {

  },
  subHeading: {

  }
});

const Header = withStyles(headerSyles)((props) => {
  const { classes } = props;

  return (
    <Grid item>
      <Typography variant="h2">
        Reviews
      </Typography>
    </Grid>
  );
});

const reviewStyles = theme => ({
  background: {
    backgroundColor: 'red'
  }
});

class ReviewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <Element name="reviews">
        <BackgroundContainer className={classes.background} justify="center">
          <PageContent justify="center" alignItems="center">
            <Header />
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(reviewStyles)(withWidth()(ReviewsSection));
