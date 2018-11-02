import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
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
    </Grid>
  );
});

const Service = withStyles(theme => ({
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
  content: {
    paddingTop: "40px",
    paddingBottom: "40px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px"
    }
  },
  headingBuffer: {
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing.unit * 8
    }
  },
  serviceBuffer: {
    marginBottom: theme.spacing.unit * 3
  }
});

const services = [
  {
    icon: AttachMoney,
    label: "Down Payment Assistance",
    body:
      "Buying your first home? I know of several down payment assistance programs you may qualify for."
  },
  {
    icon: AccountBalance,
    label: "Lenders",
    body:
      "Whether you need approval fast, or have unusal income streams, I know just the lendor for you."
  },
  {
    icon: Build,
    label: "Contractors",
    body:
      "Gain access to my list of professional handymen, plumbers, electricians, and general contractors."
  },
  {
    icon: CreditCard,
    label: "Credit Score Improvement",
    body:
      "I have assisted previous clients raise their credit score from the 500s to the 600s in order to purchase their first home."
  },
  {
    icon: PhotoCamera,
    label: "Professional Photos",
    body:
      "Pictures can make or break a listing. I promise to only use quality photos of property."
  },
  {
    icon: Weekend,
    label: "Home Staging",
    body:
      "Display your home's full potential with professional staging. You wont be disappointed by the stagers I use."
  }
];

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
          <PageContent
            className={classes.content}
            direction={isWidthDown("sm", width) ? "column" : "row"}
            justify="center"
          >
            <Header className={classes.headingBuffer} />
            {services.map(({ icon: Icon, label, body }) => (
              <Service
                key={label}
                className={classes.serviceBuffer}
                icon={Icon}
                label={label}
              >
                {body}
              </Service>
            ))}
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ServicesSection));
