import React from "react";
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  link: {
    textDecoration: "none"
  }
});

class HamburgerMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const { classes, menuList } = this.props;

    return (
      <div>
        <IconButton
          aria-label="Menu"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {menuList.map(menuItem => (
            <MenuItem key={menuItem.path} onClick={this.handleClose}>
              <Link className={classes.link} to={menuItem.path}>{menuItem.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

HamburgerMenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
  menuList: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
};

export default withStyles(styles)(HamburgerMenuButton);
