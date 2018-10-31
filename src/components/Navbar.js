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
import { Link } from "react-scroll";
import Logo from "./Logo";
import HamburgerMenuButton from "./HamburgerMenuButton";
import BetterHomes from "../assets/images/BetterHomes.png";
import PageContent from "./PageContent";

const menuList = [
  {
    path: "home",
    label: "Home"
  },
  {
    path: "services",
    label: "Services"
  },
  {
    path: "about",
    label: "About"
  },
  {
    path: "contact",
    label: "Contact"
  }
];

const navStyles = theme => ({
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
    },
    cursor: 'pointer'
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
          <PageContent alignItems="center" justify="space-between">
            <Logo src={BetterHomes} />

            <Hidden implementation="css" smDown>
              <div className={classes.linkContainer}>
                {menuList.map(link => (
                  <Link key={link.path} className={classes.link} to={link.path} smooth={true}>
                    <Typography variant="h6">{link.label}</Typography>
                  </Link>
                ))}
              </div>
            </Hidden>

            <Hidden implementation="css" mdUp>
              <HamburgerMenuButton menuList={menuList} />
            </Hidden>
          </PageContent>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(navStyles)(Navbar);
