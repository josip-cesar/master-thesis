import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Badge, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    marginLeft:  15
  },
  icon: {
    margin: 6,
  },
};

const CartLink = props => <Link to="/cart" {...props} />
const HomeLink = props => <Link to="/" {...props} />

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function Header(props) {
  
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>

            <IconButton color="primary" aria-label="Add to shopping cart" component={HomeLink}>
              <HomeIcon color="action" className={classes.icon} style={{ fontSize: 36 }} />
            </IconButton>
          
          <Typography variant="title" color="inherit" className={classes.grow}>
              Aplikacije temeljene na NoSQL i relacijskim bazama podataka (Josip Cesar, FOI, diplomski rad - 2018.)
          </Typography>


        {props.isUserLoggedIn &&
          <IconButton aria-label="Cart" component={CartLink}>
            <Badge badgeContent={calculateTotalQuantity(props.cart)} color="primary" className={classes.badge}>
              <ShoppingCartIcon />
          </Badge>
        </IconButton>
        } 

        {!props.isUserLoggedIn &&
        <Button component={Link} to="/registration">Registracija</Button> } 

         {!props.isUserLoggedIn && 
        <Button component={Link} to="/login">Prijava</Button> } 

         {props.isUserLoggedIn && <Button component={Link} to="/login" >Odjava</Button> }
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired
};

function calculateTotalQuantity(cart) {
  var sum = 0;
  cart.forEach(function(item) {
    sum += item.quantity; 
  })
  return sum;
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    isUserLoggedIn: state.login.loggedIn
  }
}

const connetedHeader = connect(mapStateToProps)(Header); 
const connetedHeaderWithStyles = withStyles(styles)(connetedHeader);

export {connetedHeaderWithStyles as Header};