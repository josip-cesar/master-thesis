import { connect } from  'react-redux'
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router";
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

import { calculateTotalPrice, getProductForCartItem } from "./Review";

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Adresa za dostavu', 'Detalji plaćanja', 'Potvrda narudžbe'];

function createOrderItemList (cart, cartedProducts) {
  var orderItemList = [];
  var length = cart.length;
  for (var i = 0; i < length; i++) {
    const price = getProductForCartItem(cartedProducts, cart[i].productId).price;
     var o = {
        productCatalogItemId: cart[i].productId,
        quantity: cart[i].quantity,
        price: price
      }
      orderItemList.push(o);
  }
  return orderItemList;
}

class Checkout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      activeStep: 0,

      firstName: this.props.loggedUser.firstName,
      lastName: this.props.loggedUser.lastName,
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',

      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''

    };

    this.handleStateUpdate = this.handleStateUpdate.bind(this);

  }


  


  // Event triggered when a step want to update global stepper state
 handleStateUpdate (event) {
    const { name, value } = event.target;
     this.setState({ [name]: value });
}


 getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm 
        state={this.state}
        handleStateUpdate={this.handleStateUpdate}
      />;
    case 1:
      return <PaymentForm 
        state={this.state}
        handleStateUpdate={this.handleStateUpdate}
      />;
    case 2:
      return <Review 
        state={this.state}
        cart={this.props.cart}
        cartedProducts={this.props.cartedProducts}
      />;
    default:
      throw new Error('Nepoznati korak');
  }
}


  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });

    if(activeStep === steps.length - 1) {
      const shippingDetails = {
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        country: this.state.country
      };
    
      const paymentDetails = {
        cardHolder: this.state.cardName,
        cardNumber: this.state.cardNumber,
        expDate: this.state.expDate,
        cvv: this.state.cvv
      };

      const totalPrice = calculateTotalPrice(this.props.cart, this.props.cartedProducts);
      const orderItemList = createOrderItemList(this.props.cart, this.props.cartedProducts);
      const order = {
        customerId: this.props.loggedUser.id,
        totalPrice: totalPrice,
        shippingDetails: shippingDetails,
        paymentDetails: paymentDetails,
        orderItems: orderItemList
        // orderItems: this.props.cart
      }
  
       console.log(JSON.stringify(order));

      this.props.createOrder(order);
    }

  };


  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  renderRedirect = () => {
    if (!this.props.isUserLoggedIn) {
      return <Redirect to='/login' />
    }
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (

      <React.Fragment>
        {this.renderRedirect()}

        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="display1" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="headline" gutterBottom>
                    Hvala Vam na narudžbi.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Povratak
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Naruči' : 'Dalje'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    cart: state.cart,
    isUserLoggedIn: state.login.loggedIn,
    loggedUser: state.login.loggedInUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createOrder: (orderData) => {
      dispatch({ type: 'CREATE_ORDER_REQUEST', payload: orderData })
    }
  }
}


const connetedCheckout = connect(mapStateToProps, mapDispatchToProps)(Checkout);
const connetedCheckoutWithStyles = withStyles(styles)(connetedCheckout);

export {connetedCheckoutWithStyles as Checkout};