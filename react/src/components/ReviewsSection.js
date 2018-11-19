import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles, Typography } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from "react-scroll";
import { Person, FormatQuote } from "@material-ui/icons";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import BackgroundImage from "./Background";
import PageContent from "./PageContent";
import Yelp from "../assets/images/Yelp.png";
import Background from "../assets/images/Kitchen.jpg";
import Dots from "material-ui-dots";

const Header = withStyles({
  root: {},
  img: {
    height: "140px",
    width: "auto"
  }
})(props => {
  const { classes, className: classNameProp } = props;
  const className = classNames(classes.root, classNameProp);

  return (
    <Grid item container className={className} justify="center">
      <a target="_blank" href="https://www.yelp.com/biz/audrey-james-better-homes-and-gardens-reliance-partners-oakland-2">
        <img className={classes.img} src={Yelp} />
     </a>
    </Grid>
  );
});

const Review = withStyles(theme => ({
  root: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
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
    link,
    children,
    label,
    textLength
  } = props;
  const className = classNames(classes.root, classNameProp);
  const truncateText = text => {
    return text.length > textLength ? text.slice(0, textLength) + "..." : text;
  };

  return (
    <Grid item container className={className} xs={12} md={4}>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        className={classes.background}
      >
        <Grid item>
          <a href={link} target="_blank">
            <div className={classes.iconContainer}>
              <Icon className={classes.icon} />
            </div>
          </a>
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
              {truncateText(children)}
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

Review.defaultProps = {
  textLength: 357
};

Review.propTypes = {
  textLength: PropTypes.number
};

const reviewsData = [
  {
    name: "Lesa M",
    date: "5/16/2018",
    link:
      "https://www.yelp.com/biz/audrey-james-better-homes-and-gardens-reliance-partners-oakland-2?hrid=ZZ29QM9Uq3o27-ei6kYkNg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    body:
      'Audrey is simply "The Best"! Audrey provided me with phenomenal service\
       by not only sending me information on homes available within my price range\
       but also  providing me with options so I could make the best decision for me.\
       Her suggestions were welcome and appreciated. During and after my new home\
       purchase Audrey provided me with contacts for all the utility companies and\
       post office information which were extremely helpful and useful. My experience\
       working with Audrey was very comfortable  and patient. She is just one down to\
       earth Lady and knows her business.'
  },
  {
    name: "Ray H",
    date: "9/30/2018",
    link:
      "https://www.yelp.com/biz/audrey-james-better-homes-and-gardens-reliance-partners-oakland-2?hrid=IUozv0Uuo3fpYa9Yc7hnHQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    body:
      "Let me tell this ... Audrey is a super agent ! To say that I recommend her\
      would be an understatement... Audrey takes her profession very seriously ,\
      she is very in to details , knows very well every angel of the real estate\
      transaction . We had with her mission impossible that only she could make it\
      happen . Audrey coordinated the transaction with 5 parties answering emails\
      at 7am and 11pm , very responsive, respectful and very nice . Thank you Audrey!"
  },
  {
    name: "Nick J",
    date: "2/27/2018",
    link:
      "https://www.yelp.com/biz/audrey-james-better-homes-and-gardens-reliance-partners-oakland-2?hrid=z28ajeCD6uz6d2Sf_y1rgw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)",
    body:
      "Audrey helped me buy my first duplex in Oakland a few year back. At the time\
      I came to her, I was not pre-approved nor was my credit in good standing. She\
      recommended a lender to work with, a couple ways to better my credit score,\
      and a first time homebuyer program to apply for. Without her, I would not have\
      my property today!"
  }
];

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

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
  },
  review: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

class ReviewsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.slideRenderer = this.slideRenderer.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(index, indexLatest, meta) {
    this.setState({ index: mod(index, reviewsData.length) });
  }

  slideRenderer({ index, key }) {
    return reviewsData.map(({ name, date, body, link }) => (
      <Review key={key} icon={Person} label={name} date={date} link={link}>
        {body}
      </Review>
    ))[mod(index, reviewsData.length)];
  }

  render() {
    const { classes, width } = this.props;
    const { index } = this.state;

    return (
      <Element name="reviews">
        <BackgroundImage
          src={Background}
          className={classes.background}
          justify="center"
        >
          <PageContent className={classes.content} justify="center">
            <Header className={classes.headingBuffer} />

            {isWidthDown("sm", width) ? (
              <Fragment>
                <VirtualizeSwipeableViews
                  enableMouseEvents
                  onChangeIndex={this.updateIndex}
                  slideRenderer={this.slideRenderer}
                />
                <Dots index={index} count={reviewsData.length} />
              </Fragment>
            ) : (
              reviewsData.map(({ name, date, body, link }) => (
                <Review
                  key={name}
                  icon={Person}
                  label={name}
                  date={date}
                  link={link}
                >
                  {body}
                </Review>
              ))
            )}
          </PageContent>
        </BackgroundImage>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(ReviewsSection));
