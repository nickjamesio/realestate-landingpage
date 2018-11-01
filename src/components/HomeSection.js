import React, { Component } from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { Element } from 'react-scroll';
import Background from "../assets/images/house1.jpg";
import Realtor from "../assets/images/businesslady.png";
import SubscribeCard from "./SubscribeCard";
import BackgrounImage from './Background';
import PageContent from './PageContent';

const styles = theme => ({
  content: {
    paddingTop: '40px',
    paddingBottom: '40px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '80px',
      paddingBottom: '80px'
    }
  },
  realtorContainer: {
    alignSelf: "end",
    height: "600px",
  },
  realtor: {
    height: '100%',
    width: "auto"
  },
});

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <Element name="home">
        <BackgrounImage justify="center" src={Background}>
          <PageContent
            justify={ isWidthDown('sm', width) ? "center" : "space-between"}
          >
            <Hidden smDown>
              <Grid item className={classes.realtorContainer}>
                <img src={Realtor} className={classes.realtor} />
              </Grid>
            </Hidden>
            <Grid item>
              <SubscribeCard className={classes.content} />
            </Grid>
          </PageContent>
        </BackgrounImage>
      </Element>
    );
  }
}

export default withStyles(styles)(withWidth()(HomeSection));
