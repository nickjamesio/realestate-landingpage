import React, { Component } from "react";
import { Grid, Hidden, Typography, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import { PhotoCamera } from "@material-ui/icons";
import { BackgroundContainer } from "./Background";
import PageContent from "./PageContent";
import classNames from "classnames";

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
          Services
        </Typography>
      </Grid>
      {/* <Typography className={classes.subHeading} variant="subheading">
        What ever you need, I'm sure I can help
      </Typography> */}
    </Grid>
  );
});

const Service = withStyles(theme => ({
  root: {},
  icon: {
    fontSize: "60px"
  },
  description: {
    marginTop: theme.spacing.unit,
    maxWidth: "350px"
  }
}))(props => {
  const {
    classes,
    className: classNameProp,
    icon: Icon,
    children,
    label
  } = props;
  const className = classNames(classes.root, classNameProp);

  return (
    <Grid
      item
      container
      className={className}
      direction="column"
      alignItems="center"
      xs={12}
      md={6}
    >
      <Grid item>
        <Icon className={classes.icon} />
      </Grid>
      <Grid item>
        <Typography variant="h5">{label}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.description} align="center">
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
});

const styles = theme => ({
  headingBuffer: {
    marginBottom: theme.spacing.unit * 8
  },
  serviceBuffer: {
    marginBottom: theme.spacing.unit * 3
  }
});

class ServicesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <Element name="services">
        <BackgroundContainer justify="center">
          <PageContent direction="column" justify="center">
            <Header className={classes.headingBuffer} />

            <Grid
              container
              wrap={isWidthDown("sm", width) ? "nowrap" : "wrap"}
              direction={isWidthDown("sm", width) ? "column" : "row"}
            >
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Down Payment Assistance"
              >
                Buying your first home? I know of several down payment
                assistance programs you may qualify for.
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Lendors"
              >
                Wheather you need approval fast, or
              </Service>
            </Grid>
            <Grid
              container
              wrap={isWidthDown("sm", width) ? "nowrap" : "wrap"}
              direction={isWidthDown("sm", width) ? "column" : "row"}
            >
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Contractors"
              >
                Test test test test test
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Credit Score Improvement"
              >
                Test test test test test
              </Service>
            </Grid>
            <Grid
              container
              wrap={isWidthDown("sm", width) ? "nowrap" : "wrap"}
              direction={isWidthDown("sm", width) ? "column" : "row"}
            >
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Professional Photos"
              >
                Test test test test test
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={PhotoCamera}
                label="Stagers"
              >
                Test test test test test
              </Service>
            </Grid>
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ServicesSection));
