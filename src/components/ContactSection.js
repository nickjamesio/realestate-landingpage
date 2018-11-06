import React, { Component } from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import withWidth from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import classNames from "classnames";
import { BackgroundContainer } from "./Background";
import PageContent from "./PageContent";

const Header = withStyles({
  root: {},
  heading: {},
  text: {
    color: "white"
  }
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
        <Typography
          className={classNames(classes.text, classes.heading)}
          variant="h3"
        >
          Contact
        </Typography>
      </Grid>
      {/* <Grid item>
        <Typography className={classes.subHeading} variant="subheading">
          If you have any real estate related questions, feel free to call, email, or shoot a text my way.
        </Typography>
      </Grid> */}
    </Grid>
  );
});

const ContactOptions = withStyles(theme => ({
  option: {
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      marginBottom: 0
    },
    "& .clickable:hover": {
      color: "rgba(1,1,1,.4)",
    },
  },
  text: {
    color: "white"
  },
  icon: {
    fontSize: "80px",
    color: "white"
  }
}))(props => {
  const { classes } = props;
  const options = [
    {
      icon: LocationOn,
      text: "3923 Grand Ave, Oakland, CA 94610",
      link: "https://goo.gl/maps/8M8eygGjbT92"
    },
    { 
      icon: Phone,
      text: "510-421-3020",
      link: null
    },
    {
      icon: Email,
      text: "audrey.james@bhghome.com",
      link: "mailto:audrey.james@bhghome.com"
    }
  ];

  return (
    <Grid item container justify="space-around">
      {options.map(({ icon: Icon, text, link }) => (
        <Grid
          item
          container
          key={text}
          className={classes.option}
          direction="column"
          alignItems="center"
          xs={12}
          md={4}
        >
          {link === null
            ? <Icon className={classes.icon} />
            : <a target="_blank" href={link}><Icon className={classNames(classes.icon, "clickable")} /></a>
          }
          <Typography className={classes.text} variant="subheading">
            {text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
});

const styles = theme => ({
  background: {
    ...theme.greenBackground
  },
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
  }
});

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, width } = this.props;

    return (
      <Element name="contact">
        <BackgroundContainer justify="center" className={classes.background}>
          <PageContent className={classes.content} justify="center">
            <Header className={classes.headingBuffer} />
            <ContactOptions />
          </PageContent>
        </BackgroundContainer>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ContactSection));
