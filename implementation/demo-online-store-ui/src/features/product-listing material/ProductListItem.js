import React from 'react'
import {AddButton} from './AddButton'
import {RemoveButton} from './RemoveButton'
import { Card, CardMedia, CardContent, Typography, CardActions } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '5.25%',
    height: 250
  },
  cardContent: {
    flexGrow: 1,
  },
  price: {
    marginTop: 5,
    marginLeft: 5
  }

};


function ProductListItem(props) {

  const { classes } = props;

  return <Card className={classes.card}>

      <Typography className={classes.price} color="secondary" variant="title">
          { props.product.price } kn
      </Typography>

    <CardMedia
            className={classes.cardMedia}
            component="img"
            src={ `/products/${props.product.image}` }
            title={ props.product.name }
      />

    <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="headline" component="h2">
          { props.product.name }
      </Typography>
      <Typography>
          { props.product.description }
      </Typography>
    </CardContent>

    <CardActions>
        <AddButton
          productId={props.product.id}
          cartItem={props.cartItem}
          addToCart={props.addToCart}
          isUserLoggedIn={props.isUserLoggedIn}
        />

        {
        props.cartItem
          ? <RemoveButton
             productId={props.product.id}
            removeFromCart={props.removeFromCart}
          />
          : null
        }

    </CardActions>
  </Card>
}

export default withStyles(styles)(ProductListItem);