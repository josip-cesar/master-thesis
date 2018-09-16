import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

export const getProductForCartItem = (cartedProducts, cartItemId) => {
  const len = cartedProducts.length;
  for (var i = 0; i < len; i++) {
    if (cartedProducts[i].id === cartItemId) {
      return cartedProducts[i];
    }
  }

}

export function calculateTotalPrice (cart, cartedProducts) {
  var total = 0;
  cart.map(cartItem => (total += (getProductForCartItem(cartedProducts, cartItem.productId).price * cartItem.quantity)));
  return total;
}

const createProductListItem = (cartedProducts, cartItem, classes) => {
  const product = getProductForCartItem(cartedProducts, cartItem.productId)
  return <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.name + " X " + cartItem.quantity} />
            <Typography variant="body2">{product.price * cartItem.quantity}</Typography>
        </ListItem>;
}

function Review(props) {

  const { classes } = props;
  const cartedProducts = props.cartedProducts;
  console.log("Rewiev");
  console.log(cartedProducts);
  return (
    <React.Fragment>
      <Typography variant="title" gutterBottom>
       Pregled narudžbe
      </Typography>
      <List disablePadding>

        {props.cart.map(cartItem => (
          createProductListItem(cartedProducts, cartItem, classes)
        ))}


        <ListItem className={classes.listItem}>
          <ListItemText primary="Ukupno" />
          <Typography variant="subheading" className={classes.total}>
            {calculateTotalPrice(props.cart, cartedProducts)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="title" gutterBottom className={classes.title}>
            Dostava
          </Typography>
          <Typography gutterBottom>{props.state.firstName} {props.state.lastName}</Typography>
          <Typography gutterBottom>{[props.state.address, props.state.city, props.state.state, props.state.zip, props.state.country].join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="title" gutterBottom className={classes.title}>
            Detalji plaćanja
          </Typography>
          <Grid container>

              <React.Fragment key="vlasnikKartice">
                <Grid item xs={6}>
                  <Typography gutterBottom>Vlasnik kartice</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.state.cardName}</Typography>
                </Grid>
              </React.Fragment>

              <React.Fragment key="brojKartice">
                <Grid item xs={6}>
                  <Typography gutterBottom>Broj Kartice</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.state.cardNumber}</Typography>
                </Grid>
              </React.Fragment>

              <React.Fragment key="datumIsteka">
                <Grid item xs={6}>
                  <Typography gutterBottom>Datum isteka</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.state.expDate}</Typography>
                </Grid>
              </React.Fragment>

          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);