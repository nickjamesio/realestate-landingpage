import React from "react";
import PropTypes from "prop-types";
import { Popper, Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2
  }
});

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClickAway = this.handleClickAway.bind(this);
  }

  handleClickAway() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { anchorEl, classes, children, open, ...other } = this.props;

    return (
      <Popper open={open} anchorEl={anchorEl} {...other}>
        <Paper>
          <Typography className={classes.typography}>{children}</Typography>
        </Paper>
      </Popper>
    );
  }
}

Tooltip.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
};

export default withStyles(styles)(Tooltip);
