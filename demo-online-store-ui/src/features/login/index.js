import React from "react";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import loginStyle from "./loginStyle";
import { login, logout } from "./reducer";
import { connect } from 'react-redux';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(logout());

        this.state = {
          loginEmail: '',
          loginPassword: '',
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { loginEmail, loginPassword } = this.state;
        const { dispatch } = this.props;
        if (loginEmail && loginPassword) {
          //  this.props.login(loginEmail, loginPassword);
          dispatch(login(loginEmail, loginPassword));
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
              <CssBaseline />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">Prijava</Typography>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="loginEmail">Email adresa</InputLabel>
                      <Input id="loginEmail" name="loginEmail" autoComplete="email" 
                        value={this.state.loginEmail} autoFocus onChange={this.handleChange}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth >
                      <InputLabel htmlFor="loginPassword">Lozinka</InputLabel>
                      <Input name="loginPassword" type="password" id="loginPassword" 
                        value={this.state.loginPassword}
                        onChange={this.handleChange} />
                    </FormControl>
                    <Button type="submit" fullWidth variant="raised" color="primary"
                      className={classes.submit} >
                      Prijavi se
                    </Button>
                  </form>
                </Paper>
              </main>
            </React.Fragment>
          );
    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { loggedIn } = state.login;
  return {
    loggedIn
  };
}

const connectedLogin = connect(mapStateToProps)(Login);
const connectedLoginWithStyles = withStyles(loginStyle)(connectedLogin);

export { connectedLoginWithStyles as Login }; 