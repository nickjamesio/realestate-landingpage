import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";

const styles = {
  logo: {
    width: "100px",
    height: "inherit"
  }
};

const Logo = props => {
  const { src, classes, className, ...other } = props;

  return (
    <img
      {...other}
      className={classnames(classes.logo, className)}
      alt="Page logo"
      src={src}
    />
  );
};

Logo.defaultProps = {
  className: ""
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Logo);
