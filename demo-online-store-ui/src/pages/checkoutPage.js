import React from 'react';
import { connect } from  'react-redux';


import { Component } from 'react'
import { Checkout } from '../features/checkout';

class CheckoutPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cartedProducts: []
    };

  }


componentDidMount() {
    const url = 'product-service/products/findByIds/' + getCartItemIds(this.props.cart);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({cartedProducts: data }));
}


  render() {
    return (
      <div>
        <Checkout cartedProducts={this.state.cartedProducts}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export function getCartItemIds(cart) {
  var ids = [];

  var cartLength = cart.length;

  for (var i = 0; i < cartLength; i++) {
    ids.push(cart[i].productId); 
  }

  return ids;
}


const connetedCheckoutPage = connect(mapStateToProps)(CheckoutPage);

export {connetedCheckoutPage as CheckoutPage};