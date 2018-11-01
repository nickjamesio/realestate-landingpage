import React, { Component } from "react";
import { Grid, Hidden, Typography, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import {
  PhotoCamera,
  AttachMoney,
  Build,
  AccountBalance,
  CreditCard,
  Weekend
} from "@material-ui/icons";
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
        <div className={classes.iconContainer}>
          <Icon className={classes.icon} />
        </div>
      </Grid>
      <Grid item>
        <Typography variant="h5">{label}</Typography>
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
  content: {
    paddingTop: '40px',
    paddingBottom: '40px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '80px',
      paddingBottom: '80px'
    }
  },
  headingBuffer: {
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing.unit * 8
    }
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
          <PageContent className={classes.content} direction="column" justify="center">
            <Header className={classes.headingBuffer} />
            
            <Grid
              container
              wrap={isWidthDown("sm", width) ? "nowrap" : "wrap"}
              direction={isWidthDown("sm", width) ? "column" : "row"}
            >
              <Service
                className={classes.serviceBuffer}
                icon={AttachMoney}
                label="Down Payment Assistance"
              >
                Buying your first home? I know of several down payment
                assistance programs you may qualify for.
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={AccountBalance}
                label="Lenders"
              >
                Whether you need approval fast, or have unusal income streams,
                I know just the lendor for you.
              </Service>
            </Grid>
            <Grid
              container
              wrap={isWidthDown("sm", width) ? "nowrap" : "wrap"}
              direction={isWidthDown("sm", width) ? "column" : "row"}
            >
              <Service
                className={classes.serviceBuffer}
                icon={Build}
                label="Contractors"
              >
                Gain access to my list of professional handymen, plumbers,
                electricians, and general contractors.
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={CreditCard}
                label="Credit Score Improvement"
              >
                I have assisted previous clients raise their credit score from
                the 500s to the 600s in order to purchase their first home.
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
                Pictures can make or break a listing. I promise to only use
                quality photos of property.
              </Service>
              <Service
                className={classes.serviceBuffer}
                icon={Weekend}
                label="Stagers"
              >
                Display your home's full potential with professional staging.
                You wont be disappointed by the ones I use.
              </Service>
            </Grid>
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ServicesSection));
