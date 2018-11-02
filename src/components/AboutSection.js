import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import classNames from 'classnames';
import Background from "../assets/images/house1.jpg";
import { BackgroundContainer } from "./Background";
import PageContent from "./PageContent";

const Header = withStyles({
  root: {}
})(props => {
  const { classes, className: classNameProp } = props;
  const className = classNames(classes.root, classNameProp);

  return (
    <Grid
      item
      container
      className={className}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography className={classes.heading} variant="h3">
          Why Choose Me
        </Typography>
      </Grid>
    </Grid>
  );
});

const styles = theme => ({
  content: {
    paddingTop: "40px",
    paddingBottom: "40px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px"
    }
  },
});

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <Element name="about">
        <BackgroundContainer justify="center" src={Background}>
          <PageContent className={classes.content} justify="center" alignItems="center">
            <Header />
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(AboutSection));
