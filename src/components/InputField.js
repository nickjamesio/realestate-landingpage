import React from "react";
import PropTypes from "prop-types";
import { Input, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    paddingLeft: "1em",
    paddingRight: "1em",
    width: "100%",
    height: "2.5em",
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "transparent"
  },
  focused: {
    ...theme.greenBorder,
    border: "2px solid",
  },
  error: {
    ...theme.redBorder,
    border: "2px solid",
  }
});

const InputField = props => {
  const { classes, ...other } = props;
  return (
    <Input
      disableUnderline
      classes={{
        ...classes,
        focused: classes.focused
      }}
      {...other}
    />
  );
};

InputField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputField);
