import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, Events, scroller } from "react-scroll";

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

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => console.log('end scroll') || this.handleClose());
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose(element, offset) {
    this.setState({ anchorEl: null });
    scroller.scrollTo(element, {
      smooth: true,
      offset
    });
  }

  render() {
    const { anchorEl } = this.state;
    const { classes, menuList } = this.props;

    return (
      <Fragment>
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
            <MenuItem key={menuItem.path} onClick={() => this.handleClose(menuItem.path, menuItem.offset)}>
              {menuItem.label}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    );
  }
}

HamburgerMenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default withStyles(styles)(HamburgerMenuButton);
