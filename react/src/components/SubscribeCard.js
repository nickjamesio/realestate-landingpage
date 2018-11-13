import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";
import classNames from "classnames";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Tooltip from "./Tooltip";
import PhoneNumberInput from "./PhoneNumberInput";
import MaskedInput from "react-text-mask";

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
      const error_message = "Please fill out this field"; 

      this.state = {
        name: {value: "", error: false, error_message},
        email: {value: "", error: false, error_message},
        phone: {value: "", error: false, error_message},
        transaction: {value: "buy", error: false, error_message},
        price: {value: "100,000", error: false, error_message}
      };

      this.nameRef = React.createRef();
      this.emailRef = React.createRef();
      this.phoneRef = React.createRef();

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const fieldName = event.target.name;
      const fieldValue = this.state[event.target.name];
      fieldValue.value = event.target.value;
      fieldValue.error = false;

      this.setState({
        [fieldName]: fieldValue
      });
    }

    handleSubmit(event) {
      event.preventDefault();

      const { name, email, phone } = this.state;
      const phoneRegex = /^\([1-9]\d{2}\)\s?\d{3}-\d{4}$/;
      const emailRegex = /^.+@.+\..+$/;

      if (name.value.length === 0) {
        this.setState({name: {
          ...name,
          error: true
        }});
      }

      else if (email.value.length === 0) {
        this.setState({email: {
          ...email,
          error: true
        }});
      }

      else if (phone.value.length === 0) {
        this.setState({phone: {
          ...phone,
          error: true
        }});
      }

      else if (!emailRegex.test(email.value)) {
        this.setState({email: {
          ...email,
          error_message: "Invalid email",
          error: true
        }});
      }

      else if (!phoneRegex.test(phone.value)) {
        this.setState({phone: {
          ...phone,
          error_message: "Invalid phone number",
          error: true
        }});
      }
    }

    render() {
      const { name, email, phone, price, transaction } = this.state;
      const { classes } = this.props;
      const priceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => {
        let number = value * 100000;
        return (number = number.toLocaleString("en-US"));
      });

      return (
        <form noValidate className={classes.root} onSubmit={this.handleSubmit}>
          <InputField
            id="name"
            name="name"
            error={name.error}
            placeholder="Name"
            value={name.value}
            onChange={this.handleChange}
            className={classes.bottomBuffer}
            tooltipOpen={name.error}
            tooltipMessage={name.error_message}
          />

          <InputField
            id="email"
            name="email"
            error={email.error}
            type="email"
            placeholder="Email"
            value={email.value}
            onChange={this.handleChange}
            className={classes.bottomBuffer}
            tooltipOpen={email.error}
            tooltipMessage={email.error_message}
          />
          <MaskedInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'_'}
            onChange={this.handleChange}
            error={phone.error}
            render={(ref, props) =>
              <InputField
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                error={phone.error}
                value={phone.value}
                className={classes.bottomBuffer}
                tooltipOpen={phone.error}
                tooltipMessage={phone.error_message}
                fieldRef={ref}
                {...props}
              />
            }
          />

          <Grid container justify="space-between">
            <SelectField
              id="transaction"
              name="transaction"
              value={transaction.value}
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
              value={price.value}
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
    backgroundColor: "rgba(1,1,1,.6)",
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
