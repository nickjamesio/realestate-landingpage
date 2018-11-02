import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import green from "@material-ui/core/colors/green";
import { Person, FormatQuote } from "@material-ui/icons";
import classNames from "classnames";
import BackgroundImage from "./Background";
import PageContent from "./PageContent";
import Yelp from '../assets/images/Yelp.png';
import Background from "../assets/images/wood-kitchen.jpg"

const Header = withStyles({
  root: {
    height: '140px'
  },
  img: {
    height: '100%',
    width: 'auto'
  }
})(props => {
  const { classes, className: classNameProp } = props;
  const className = classNames(classes.root, classNameProp);

  return (
    <Grid
      item
      container
      className={className}
      justify="center"
    >
      <img className={classes.img} src={Yelp} />
    </Grid>
  );
});

const Review = withStyles(theme => ({
  root: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  background: {
    padding: theme.spacing.unit * 4,
    backgroundColor: "rgba(1,1,1,.6)"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "50%",
    height: "80px",
    width: "80px",
    marginBottom: theme.spacing.unit
  },
  label: {
    color: "white",
    marginBottom: theme.spacing.unit
  },
  icon: {
    fontSize: "50px",
    color: "black"
  },
  description: {
    color: "white"
  },
  date: {
    color: "white"
  },
  quote: {
    color: "white",
    fontSize: "2em",
    "&.first": {
      transform: "rotate(180deg)",
      alignSelf: "flex-start"
    },
    "&.last": {
      alignSelf: "flex-end"
    }
  }
}))(props => {
  const {
    classes,
    className: classNameProp,
    date,
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
      xs={12}
      md={4}
    >
      <Grid container item direction="column" alignItems="center" className={classes.background}>
        <Grid item>
          <div className={classes.iconContainer}>
            <Icon className={classes.icon} />
          </div>
        </Grid>
        <Grid item>
          <Typography className={classes.label} variant="h5" align="center">
            {label}
          </Typography>
        </Grid>
        <Grid item container direction="column" wrap="nowrap">
          <FormatQuote className={classNames("first", classes.quote)} />
          <Grid item>
            <Typography className={classes.description} align="center">
              {children}
            </Typography>
          </Grid>
          <FormatQuote className={classNames("last", classes.quote)} />
        </Grid>
        <Grid item>
          <Typography variant="subheading" className={classes.date}>
            {date}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
});

const styles = theme => ({
  background: {
    backgroundColor: green[500]
  },
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
  },
  review: {
    paddingLeft: "20px",
    paddingRight: "20px"
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
        <BackgroundImage src={Background} className={classes.background} justify="center">
          <PageContent className={classes.content} justify="center">
            <Header className={classes.headingBuffer} />

            <Review icon={Person} label="Nick James" date="2/27/2018">
              Audrey is the bestest realtor in da whole wide world. I like
              trains and watching youtube videos. This is a bunch of garbage
              text just to see what it looks like.
            </Review>
            <Review icon={Person} label="Nick James" date="5/17/2018">
              Audrey is the bestest realtor in da whole wide world. I like
              trains and watching youtube videos. This is a bunch of garbage
              text just to see what it looks like.
            </Review>
            <Review icon={Person} label="Nick James" date="2/27/2018">
              Audrey is the bestest realtor in da whole wide world. I like
              trains and watching youtube videos. This is a bunch of garbage
              text just to see what it looks like.
            </Review>
          </PageContent>
        </BackgroundImage>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ReviewsSection));
