import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { removeFromCart2 } from "../cart/reducer";

class RemoveButton extends Component {


  render() {
    const { dispatch } = this.props;
    return (
      <Button
      onClick={() => dispatch(removeFromCart2(this.props.userId, this.props.cart, this.props.productId))}
  >Ukloni</Button>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    userId: state.login.loggedInUser.id
  }
}

const connectedRemoveButton = connect(mapStateToProps)(RemoveButton);

export { connectedRemoveButton as RemoveButton }; 
