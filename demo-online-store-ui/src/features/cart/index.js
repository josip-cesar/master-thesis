import React from 'react';
import { connect } from  'react-redux';
import { Button, TableHead, TableRow, TableCell, Paper, Table, TableBody, Typography, CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import { itemInCart } from "./reducer";
import { addToCart2 } from "../cart/reducer";
import { removeFromCart2 } from "../cart/reducer";
import { removeAllFromCart2 } from "../cart/reducer";

const styles = theme => ({
  root: {
    width: '60%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  table: {
    minWidth: 500,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 50,
    height: 50,
  },
  checkoutButton: {
    
    marginTop: theme.spacing.unit * 3,
    width: theme.spacing.unit * 25
    
  }

});




const CheckoutLink = props => <Link to="/checkout" {...props} />


function Cart(props) {
  
  const { classes } = props;
  const cartedProducts = props.cartedProducts;
  const { dispatch } = props;

  return <Paper className={classes.root}>
     <CssBaseline />
  <Typography variant="display1" align="center">
        Košarica proizvoda
  </Typography>

  <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Artikl</TableCell>
          <TableCell>Naziv</TableCell>
          <TableCell numeric>Količina</TableCell>
          <TableCell numeric>Cijena</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
          cartedProducts.map(product => {

            // const item = getCartItemForProduct(product.id, props.cart);
           const item = itemInCart(props.cart, product.id);

           if (item) {
            return (
                  <TableRow key={product.id}>
                    <TableCell component="th" scope="row">
      
                    <Avatar
                      alt={product.name}
                      src={ `/products/${product.image}` }
                      className={classNames(classes.avatar, classes.bigAvatar)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {product.name}
                    </TableCell>
                    <TableCell numeric>{item.quantity}</TableCell>
                    <TableCell numeric>{product.price}</TableCell>
                    <TableCell >
                      <Button color="primary" aria-label="Add" onClick={() => dispatch(addToCart2(props.userId, props.cart, item.productId))} ><AddIcon /></Button> 
                      <Button color="secondary" aria-label="Remove" onClick={() => dispatch(removeFromCart2(props.userId, props.cart, item.productId))}><RemoveIcon /></Button> 
                    </TableCell>
                    <TableCell >
                      <Button variant="contained" color="secondary"onClick={() => dispatch(removeAllFromCart2(props.userId, props.cart, item.productId))} >Ukloni  <DeleteIcon className={classes.rightIcon} /></Button></TableCell>
                  </TableRow>
                );
              } else return null;
            })
        }
      </TableBody>
    </Table>

   <div style={{float:'right'}}>
      <Button disabled={props.cart.length === 0} variant="contained" size="large" color="primary" className={classes.checkoutButton} component={CheckoutLink}>Checkout</Button>
   </div>


</Paper>

}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    userId: state.login.loggedInUser.id
  }
}

const connetedCart = connect(mapStateToProps)(Cart);
const connetedCartWithStyles = withStyles(styles)(connetedCart);

export {connetedCartWithStyles as Cart};