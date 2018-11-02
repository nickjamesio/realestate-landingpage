import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import red from "@material-ui/core/colors/red";
import classNames from "classnames";
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
          Reviews
        </Typography>
      </Grid>
    </Grid>
  );
});

const Review = withStyles(theme => ({
  root: {
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: "50%",
    height: "80px",
    width: "80px",
    marginBottom: theme.spacing.unit
  },
  icon: {
    fontSize: "50px",
    color: "white"
  },
  description: {
    marginTop: theme.spacing.unit
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
        <div className={classes.iconContainer}>
          <Icon className={classes.icon} />
        </div>
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          color="secondary"
          className={classes.description}
          align="center"
        >
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
});


const styles = theme => ({
  background: {
    backgroundColor: red[500]
  },
  content: {
    paddingTop: "40px",
    paddingBottom: "40px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px"
    }
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
          <PageContent className={classes.content} justify="center">
            <Header />
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ReviewsSection));
