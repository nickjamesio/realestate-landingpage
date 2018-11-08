import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import classNames from "classnames";

const containerStyles = theme => ({
  root: {}
});

const BackgroundContainer = withStyles(containerStyles)(
  ({ children, className: classNameProp, classes, ...other }) => {
    const className = classNames(classes.root, classNameProp);

    return (
      <Grid container className={className} {...other}>
        {children}
      </Grid>
    );
  }
);

const imageStyles = theme => ({
  root: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
});

const BackgroundImage = withStyles(imageStyles)(props => {
  const { children, className: classNameProp, classes, src, ...other } = props;
  const inlineStyles = { backgroundImage: `url(${src})` };
  const className = classNames(classes.root, classNameProp);

  return (
    <BackgroundContainer className={className} style={inlineStyles} {...other}>
      {children}
    </BackgroundContainer>
  );
});

export default BackgroundImage;
export { BackgroundContainer };
