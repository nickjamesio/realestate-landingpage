import React from "react";
import PropTypes from "prop-types";
import { Select, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme => ({
  root: {
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "transparent",
    height: "2.5em"
  },
  select: {
    textIndent: "5px",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      textIndent: "1em"
    }
  }
});

const SelectField = props => {
  const { classes, width, children, ...other } = props;
  const native = isWidthDown("sm", width);
  return (
    <Select
      native={native}
      disableUnderline
      {...other}
      classes={{
        ...classes
      }}
    >
      {children(native)}
    </Select>
  );
};

SelectField.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};

export default withStyles(styles)(withWidth()(SelectField));
