import React from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "@material-ui/core";
import classNames from 'classnames';

const styles = theme => ({
  content: {
    ...theme.appWidth,
    height: "100%"
  }
});

const PageContent = (props) => {
  const {children, classes, className: classNameProp, ...other} = props;
  const className = classNames(
    classes.content,
    classNameProp,
  );

  return (
    <Grid item container className={className} {...other}>
      {children}
    </Grid>
  );
};

PageContent.defaultProps = {
  className: ''
};

PageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(PageContent);
