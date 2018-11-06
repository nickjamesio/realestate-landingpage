import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import classNames from "classnames";
import Background from "../assets/images/house1.jpg";
import PageContent from "./PageContent";
import { BackgroundContainer } from "./Background";
import Realtor from "../assets/images/Lady.jpg";
import Facebook from "../assets/images/Facebook.png";
import Twitter from "../assets/images/Twitter.png";
import Instagram from "../assets/images/Instagram.png";

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
        <Typography className={classes.heading} variant="h3" align="center">
          Why Choose Me
        </Typography>
      </Grid>
    </Grid>
  );
});

const About = withStyles(theme => ({
  image: {
    height: "auto",
    width: "90%"
  },
  socialLink: {
    marginRight: theme.spacing.unit * 2,
    "& .socialIcon": {
      width: "30px",
      height: "auto"
    }
  },
  meta: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      paddingTop: 0
    }
  },
  name: {
    ...theme.greenText,
    paddingRight: theme.spacing.unit * 3
  },
  body: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    "& .paragraph": {
      marginBottom: theme.spacing.unit * 2
    }
  }
}))(props => {
  const { classes } = props;

  return (
    <Grid item container>
      <Grid
        item
        container
        xs={12}
        md={6}
        direction="column"
        alignItems="center"
      >
        <img className={classes.image} src={Realtor} />
      </Grid>
      <Grid item xs={12} md={6} className={classes.body}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.meta}
        >
          <Typography variant="h4" className={classes.name}>
            Audrey James
          </Typography>
          <Typography variant="h5">License #01502402</Typography>
        </Grid>
        <Typography
          className="paragraph"
          color="secondary"
          variant="subheading"
        >
          Audrey is a Bay Area native and licensed Realtor with Better Homes and
          Gardens Real Estate working out of the Oakland, California, Grandlake
          office. She is well-regarded in the industry for his attention to
          detail, professionalism and commitment to personal service.
        </Typography>
        <Typography
          className="paragraph"
          color="secondary"
          variant="subheading"
        >
          She has represented both buyers and sellers in all parts of Alameda
          and Contra Costa County, and specializes in first-time home buyers,
          short sales, real estate listings and sales as well.
        </Typography>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          className={classes.social}
        >
          <Grid item className={classes.socialLink}>
            <a target="_blank" href="https://google.com">
              <img className="socialIcon" src={Facebook} />
            </a>
          </Grid>
          <Grid item className={classes.socialLink}>
            <a target="_blank" href="https://google.com">
              <img className="socialIcon" src={Twitter} />
            </a>
          </Grid>
          <Grid item className={classes.socialLink}>
            <a target="_blank" href="https://google.com">
              <img className="socialIcon" src={Instagram} />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

const styles = theme => ({
  headingBuffer: {
    marginBottom: theme.spacing.unit * 4,
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing.unit * 8
    }
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
          <PageContent
            className={classes.content}
            justify="center"
            alignItems="center"
          >
            <Header className={classes.headingBuffer} />

            <About />
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(AboutSection));
