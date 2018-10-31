import React, { Component } from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import Background from "../assets/images/house1.jpg";
import Realtor from "../assets/images/businesslady.png";
import ContactCard from "./ContactCard";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme => ({
  root: {
    // width: '100%',
  },
  background: {
    height: "550px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up('md')]: {
      height: "700px",
    }
  },
  realtorContainer: {
    height: "90%",
    alignSelf: "end"
  },
  realtor: {
    height: "100%",
    width: "auto"
  },
  content: {
    ...theme.appWidth,
    height: "inherit"
  },
  cardContainer: {
    alignSelf: "center",
    justifySelf: "center",
    height: "100%"
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, width } = this.props;

    return (
      <main className={classes.root}>
        <Grid container justify="center" className={classes.background}>
          <Grid
            item
            container
            justify={ isWidthDown('sm', width) ? "center" : "space-between"}
            className={classes.content}
          >
            <Hidden smDown>
              <Grid item className={classes.realtorContainer}>
                <img src={Realtor} className={classes.realtor} />
              </Grid>
            </Hidden>
            <Grid item className={classes.cardContainer}>
              <ContactCard />
            </Grid>
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default withStyles(styles)(withWidth()(HomePage));
