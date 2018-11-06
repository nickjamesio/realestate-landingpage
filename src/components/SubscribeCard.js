import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";
import classNames from "classnames";
import InputField from "./InputField";
import SelectField from "./SelectField";

const headerStyles = theme => ({
  root: {
    marginBottom: "1em",
    [theme.breakpoints.up("md")]: {
      marginBottom: "3em"
    }
  },
  uppercase: {
    textTransform: "uppercase"
  },
  subHeading: {
    marginTop: theme.spacing.unit
  },
  white: {
    color: "white"
  }
});

const CardHeader = withStyles(headerStyles)(({ classes }) => (
  <Grid
    container
    className={classes.root}
    direction="column"
    alignItems="center"
  >
    <Typography
      className={classNames(classes.uppercase, classes.white)}
      variant="h4"
    >
      Real Estate
    </Typography>
    <Typography
      className={classNames(classes.uppercase, classes.white)}
      variant="h4"
    >
      Made Easy
    </Typography>
    <Typography
      className={classNames(classes.subHeading, classes.white)}
      align="center"
      variant="subheading"
    >
      Let me help you with your next real estate transaction
    </Typography>
  </Grid>
));

const formStyles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  bottomBuffer: {
    marginBottom: "1.5em",
    [theme.breakpoints.up("md")]: {
      marginBottom: "2em"
    }
  },
  selectField: {
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "transparent",
    marginBottom: "2em",
    height: "2.5em"
  },
  price: {
    flexGrow: 1,
    marginLeft: "2em"
  },
  submit: {
    ...theme.greenBackground,
    height: "4em"
  },
  whiteText: {
    color: 'white'
  }
});

const CardForm = withStyles(formStyles)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        phone: "",
        transaction: "buy",
        price: "100,000"
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
    }

    render() {
      const { name, email, phone, price, transaction } = this.state;
      const { classes } = this.props;
      const priceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
        let number = value * 100000;
        return (number = number.toLocaleString("en-US"));
      });

      return (
        <form novalidate="novalidate" className={classes.root} onSubmit={this.handleSubmit}>
          <InputField
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            className={classes.bottomBuffer}
          />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            className={classes.bottomBuffer}
          />
          <InputField
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={this.handleChange}
            className={classes.bottomBuffer}
          />
          <Grid container justify="space-between">
            <SelectField
              id="transaction"
              name="transaction"
              value={transaction}
              onChange={this.handleChange}
              className={classes.bottomBuffer}
            >
              {native =>
                native === true
                  ? ["Buy", "Sell"].map(item => (
                      <option key={item} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))
                  : ["Buy", "Sell"].map(item => (
                      <MenuItem key={item} value={item.toLowerCase()}>
                        {item}
                      </MenuItem>
                    ))
              }
            </SelectField>
            <SelectField
              id="price"
              name="price"
              value={price}
              onChange={this.handleChange}
              className={classNames(classes.bottomBuffer, classes.price)}
            >
              {native =>
                native === true
                  ? priceArray.map(value => (
                      <option key={value} value={value}>{`$${value}+`}</option>
                    ))
                  : priceArray.map(value => (
                      <MenuItem
                        key={value}
                        value={value}
                      >{`$${value}+`}</MenuItem>
                    ))
              }
            </SelectField>
          </Grid>
          <Button className={classes.submit} type="submit" variant="contained">
            <Typography className={classes.whiteText} variant="h6">
              Click Here
            </Typography>
          </Button>
        </form>
      );
    }
  }
);

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(1,1,1,.7)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "400px"
    }
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%"
  }
});

const SubscribeCard = props => {
  const { classes, className: classNameProp, ...other } = props;
  const className = classNames(classes.root, classNameProp);

  return (
    <Paper className={className} square elevation={0} {...other}>
      <div className={classes.content}>
        <CardHeader />

        <CardForm />
      </div>
    </Paper>
  );
};

SubscribeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubscribeCard);
