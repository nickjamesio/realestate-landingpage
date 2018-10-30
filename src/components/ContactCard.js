import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  Grid,
  Input,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";

const headerStyles = {
  root: {
    marginBottom: '3em'
  },
  uppercase: {
    textTransform: "uppercase"
  }
};

const CardHeader = withStyles(headerStyles)(({ classes }) => (
  <Grid
    container
    className={classes.root}
    direction="column"
    alignItems="center"
  >
    <Typography className={classes.uppercase} variant="h4" color="secondary">
      Real Estate
    </Typography>
    <Typography className={classes.uppercase} variant="h4" color="secondary">
      Made Easy
    </Typography>
    <Typography color='secondary' variant='subheading'>
      Let me help you with your next real estate transaction
    </Typography>
  </Grid>
));

const formStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  textField: {
    paddingLeft: '1em',
    paddingRight: '1em',
    width: '100%',
    backgroundColor: 'white',
    border: '2px solid',
    borderColor: 'transparent',
    marginBottom: '3em'
  },
  input: {
    height: '2em',
  },
  focusedInput: {
    border: '2px solid',
    borderColor: 'green'
  }
};
const CardForm = withStyles(formStyles)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        phone: ""
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
      const { name, email, phone } = this.state;
      const { classes } = this.props;
      return (
        <form className={classes.root} onSubmit={this.handleSubmit}>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            disableUnderline
            value={name}
            onChange={this.handleChange}
            className={classes.textField}
            classes={
              {input: classes.input, focused: classes.focusedInput}
            }
          />
          <Input
            id="email"
            name="email"
            placeholder="Email"
            disableUnderline
            value={name}
            onChange={this.handleChange}
            className={classes.textField}
            classes={
              {input: classes.input, focused: classes.focusedInput}
            }
          />
          <Input
            id="phone"
            name="phone"
            placeholder="Phone"
            disableUnderline
            value={name}
            onChange={this.handleChange}
            className={classes.textField}
            classes={
              {input: classes.input, focused: classes.focusedInput}
            }
          />
          <Button type='submit' variant='contained'>
            Contact
          </Button>
        </form>
      );
    }
  }
);

const styles = {
  root: {
    height: "100%",
    width: 400,
    backgroundColor: "rgba(1,1,1,.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    width: '80%',
  }
};

const ContactCard = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root} square elevation={0}>
      <div className={classes.content}>
        <CardHeader />
        
        <CardForm />
      </div>
    </Paper>
  );
};

ContactCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactCard);
