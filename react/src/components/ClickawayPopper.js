import React from "react";
import PropTypes from "prop-types";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  withStyles
} from "@material-ui/core";
import classNames from "classnames";

const styles = theme => ({
  paper: {}
});

const ClickawayPopper = props => {
  const {
    anchorEl,
    children,
    classes,
    className: classNameProp,
    handleClickAway,
    open
  } = props;

  const className = classNames(classNameProp, classes.paper);
  return (
    <Popper open={open} anchorEl={anchorEl} transition>
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} timeout={350}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Paper className={className}>{children}</Paper>
          </ClickAwayListener>
        </Grow>
      )}
    </Popper>
  );
};

ClickawayPopper.defaultProps = {
  className: ""
};

ClickawayPopper.propTypes = {
  anchorEl: PropTypes.oneOf([PropTypes.func, PropTypes.object]),
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  handleClickAway: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(ClickawayPopper);
