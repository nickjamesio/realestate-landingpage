import React, { Component } from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import { Element } from "react-scroll";
import Background from "../../assets/images/House.jpg";
import Realtor from "../../assets/images/MomStanding.png";
import SubscribeCard from "./SubscribeCard";
import BackgrounImage from "./Background";
import PageContent from "./PageContent";

const styles = theme => ({
  content: {
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between"
    }
  },
  subscribeCard: {
    paddingTop: "40px",
    paddingBottom: "40px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "80px",
      paddingBottom: "80px"
    }
  },
  realtorContainer: {
    height: "600px",
    alignSelf: "flex-end"
  },
  realtor: {
    height: "600px",
    width: "auto"
  }
});

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <Element name="home">
        <BackgrounImage justify="center" src={Background}>
          <PageContent className={classes.content}>
            <Hidden
              smDown
              implementation="css"
              className={classes.realtorContainer}
            >
              <img src={Realtor} className={classes.realtor} />
            </Hidden>
            
            <Grid item>
              <SubscribeCard className={classes.subscribeCard} />
            </Grid>
          </PageContent>
        </BackgrounImage>
      </Element>
    );
  }
}

export default withStyles(styles)(HomeSection);
