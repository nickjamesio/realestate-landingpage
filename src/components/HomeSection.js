import React, { Component } from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import Background from "../assets/images/house1.jpg";
import Realtor from "../assets/images/businesslady.png";
import ContactCard from "./SubscribeCard";
import BackgrounImage from './Background';
import PageContent from './PageContent';

const styles = theme => ({
  realtorContainer: {
    height: "90%",
    alignSelf: "end"
  },
  realtor: {
    height: "100%",
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
      <BackgrounImage id="home" justify="center" src={Background}>
        <PageContent
          justify={ isWidthDown('sm', width) ? "center" : "space-between"}
        >
          <Hidden smDown>
            <Grid item className={classes.realtorContainer}>
              <img src={Realtor} className={classes.realtor} />
            </Grid>
          </Hidden>
          <Grid item>
            <ContactCard />
          </Grid>
        </PageContent>
      </BackgrounImage>
    );
  }
}

export default withStyles(styles)(withWidth()(HomeSection));
