import React from 'react'
import ProductListItem from './ProductListItem'
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  }
});

function ProductListing(props) {
  const { classes } = props;
  return <React.Fragment>
     <CssBaseline />
     <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
              {
                props.products.map( product =>
                  <Grid item key={product.id} sm={6} md={4} lg={3}>
                    <ProductListItem
                      product={product}
                      cartItem={props.cart.filter(cartItem => cartItem.productId === product.id)[0]}
                      addToCart={props.addToCart}
                      removeFromCart={props.removeFromCart}
                      isUserLoggedIn={props.isUserLoggedIn}
                    />
                </Grid>)
              }
          </Grid>
        </div>
     </main>

  </React.Fragment>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    isUserLoggedIn: state.login.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (productId) => {
      dispatch({ type: 'ADD', payload: productId })
    },
    removeFromCart: (productId) => {
      dispatch({ type: 'REMOVE', payload: productId })
    }
  }
}
const connetedProductListing = connect(mapStateToProps, mapDispatchToProps)(ProductListing);
const connetedProductListingWithStyles = withStyles(styles)(connetedProductListing);

export {connetedProductListingWithStyles as ProductListing};