import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Person from "@material-ui/icons/Person";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import registrationStyle from "./registrationStyle";
import { FormHelperText } from '@material-ui/core';

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirmation: ''
            },
            equalPasswords: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { user } = this.state;

        if (!this.passwordValidation(user.password, user.passwordConfirmation)) {
            this.setState({ equalPasswords: false });
        } else {
            if (user.firstName && user.lastName && user.email && user.password) {
                this.props.register(user);
            }
        }
    }

    passwordValidation(password, passwordConfirmation) {
        if (password === passwordConfirmation) {
            return true;
        } else {
            return false;
        }

    }

    render() {
        const { classes } = this.props;
        const { equalPasswords } = this.state;
        return (
            <React.Fragment>
              <CssBaseline />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <Person />
                  </Avatar>
                  <Typography variant="headline">Registracija</Typography>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="firstName">Ime</InputLabel>
                      <Input id="firstName" name="firstName"  value={this.state.firstName} autoFocus onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="lastName">Prezime</InputLabel>
                      <Input id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email adresa</InputLabel>
                      <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth error={!equalPasswords}>
                      <InputLabel htmlFor="password">Lozinka</InputLabel>
                      <Input name="password" type="password"id="password" value={this.state.password} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth error={!equalPasswords}>
                      <InputLabel htmlFor="passwordConfirmation" >Potvrda lozinke</InputLabel>
                      <Input name="passwordConfirmation" type="password" id="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />
                      { !equalPasswords &&
                          <FormHelperText>Lozinka i potvrda lozinke moraju biti isti</FormHelperText>
                      }
                    </FormControl>
                    <Button type="submit" fullWidth variant="raised" color="primary"className={classes.submit} >
                      Potvrdi registraciju
                    </Button>
                  </form>
                </Paper>
              </main>
            </React.Fragment>
          );
    }
}

Registration.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
      register: (user) => {
        dispatch({ type: 'REGISTRATION_REQUEST', payload: user });
      }
    }
  }


const connectedRegistration = connect(null, mapDispatchToProps)(Registration);
const connectedRegistrationWithStyles = withStyles(registrationStyle)(connectedRegistration);
export { connectedRegistrationWithStyles as Registration };