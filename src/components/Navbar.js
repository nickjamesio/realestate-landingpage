import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";

const styles = theme => ({
  appWidth: {
    ...theme.appWidth
  },
  colorPrimary: {
    backgroundColor: "white",
    color: theme.palette.primary.contrastText
  },
  rigthMargin: {
    marginRight: theme.spacing.unit * 5
  },
  links: {
    textDecoration: "none"
  }
});

const Navbar = props => {
  const { classes } = props;

  return (
    <AppBar
      color="primary"
      position="sticky"
      elevation={0}
      classes={{ colorPrimary: classes.colorPrimary }}
    >
      <Toolbar disableGutters>
        <Grid container justify="center">
          <Grid
            item
            container
            className={classes.appWidth}
            direction="row"
            justify="flex-end"
          >
            <Link
              className={classnames(classes.links, classes.rigthMargin)}
              to="/"
            >
              <Typography variant="h5">Home</Typography>
            </Link>
            <Link
              className={classnames(classes.links, classes.rigthMargin)}
              to="/about"
            >
              <Typography variant="h5">About</Typography>
            </Link>
            <Link className={classes.links} to="/contact">
              <Typography variant="h5">Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {};

export default withStyles(styles)(Navbar);
