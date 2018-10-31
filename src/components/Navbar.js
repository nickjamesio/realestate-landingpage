import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Grid,
  Hidden,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HamburgerMenuButton from "./HamburgerMenuButton";
import BetterHomes from "../assets/images/BetterHomes.png";

const menuList = [
  {
    path: "/#home",
    label: "Home"
  },
  {
    path: "/#reviews",
    label: "Reviews"
  },
  {
    path: "/#about",
    label: "About"
  },
  {
    path: "/#contact",
    label: "Contact"
  }
];

const navStyles = theme => ({
  appWidth: {
    ...theme.appWidth
  },
  colorPrimary: {
    backgroundColor: "white",
    color: theme.palette.primary.contrastText
  },
  linkContainer: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing.unit * 5,
    "&:last-child": {
      marginRight: 0
    }
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
            justify="space-between"
          >
            <Grid item>
              <Logo src={BetterHomes} />
            </Grid>
            <Hidden implementation='css' smDown>
              <div className={classes.linkContainer}>
                {menuList.map(link => (
                  <Link key={link.path} className={classes.link} to={link.path}>
                    <Typography variant="h6">{link.label}</Typography>
                  </Link>
                ))}
              </div>
            </Hidden>
            <Hidden implementation='css' mdUp>
                <HamburgerMenuButton menuList={menuList} />
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(navStyles)(Navbar);
