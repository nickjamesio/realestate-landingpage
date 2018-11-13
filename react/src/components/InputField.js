import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Input, withStyles } from "@material-ui/core";
import Tooltip from "./Tooltip";

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
    border: "2px solid"
  },
  error: {
    ...theme.redBorder,
    border: "2px solid"
  }
});

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.test = React.createRef();
  }

  render() {
    const {
      classes,
      fieldRef,
      tooltipOpen,
      tooltipMessage,
      ...other
    } = this.props;

    return (
      <Fragment>
        <Input
          disableUnderline
          inputRef={element => {
            this.test = element;
            if (fieldRef) {
              fieldRef(element);
            }
          }}
          classes={{
            ...classes,
            focused: classes.focused
          }}
          {...other}
        />
        <Tooltip
          placement="bottom-start"
          open={tooltipOpen}
          anchorEl={this.test}
        >
          {tooltipMessage}
        </Tooltip>
      </Fragment>
    );
  }
}

InputField.defaultProps = {
  tooltipMessage: "",
  tooltipOpen: false
};

InputField.propTypes = {
  classes: PropTypes.object.isRequired,
  tooltipMessage: PropTypes.string,
  tooltipOpen: PropTypes.bool
};

export default withStyles(styles)(InputField);
