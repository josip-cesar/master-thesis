import React from 'react';
import {Cart} from '../features/cart';
import { connect } from  'react-redux';


import { Component } from 'react'

class CartPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cartedProducts: []
    };

  }


  componentDidMount() {
    const url = 'product-service/products/findByIds/' + getCartItemIds(this.props.cart);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ cartedProducts: data }))
      .catch(error =>  console.log('Fetch Error :-S', error));
  }



  render() {
    return (
      <div>
        <Cart cartedProducts={this.state.cartedProducts}/>
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


const connetedCartPage = connect(mapStateToProps)(CartPage);

export {connetedCartPage as CartPage};