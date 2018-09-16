import React from 'react'
import { Component } from 'react'

import {ProductListing} from '../features/product-listing material'


class HomePage extends Component {

  constructor (props) {

    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/product-service/productList')
      .then(response => response.json())
      .then(data => this.setState({products: data }));
  }

  render() {
    return (
      <div>
         <ProductListing products={this.state.products} />
      </div>
    )
  }
}


export default  HomePage;