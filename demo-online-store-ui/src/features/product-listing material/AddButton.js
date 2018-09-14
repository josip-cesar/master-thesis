
import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { addToCart2 } from "../cart/reducer";

class AddButton extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <Button disabled={!this.props.isUserLoggedIn} size="small" color="primary" onClick={() => dispatch(addToCart2(this.props.userId, this.props.cart, this.props.productId))}>
        Dodaj u košaricu ({ (this.props.cartItem && this.props.cartItem.quantity) || 0 })
      </Button>
    )
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
    isUserLoggedIn: state.login.loggedIn,
    userId: state.login.loggedInUser.id
  }
}

const connectedAddButton = connect(mapStateToProps)(AddButton);

export { connectedAddButton as AddButton }; 






