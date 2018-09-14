import {cartService} from "../../_services/cartService";

const cartWithoutItem = (cart, productId) => cart.filter(cartItem => cartItem.productId !== productId);
export const  itemInCart = (cart, productId) => cart.filter(cartItem => cartItem.productId === productId)[0];

export function loadUserCart (userId) {
  return dispatch => {
    cartService.loadUsersCart(userId)
          .then(
              response => {
                console.log(response);
                  dispatch(reciveUserCart(response));
              }
          );
  };
}

function reciveUserCart(userCart) {
  return { type: "USER_CART_RECIEVED", userCart } 
 }

export function addToCart2(userId, cart, productId) {
  return dispatch => {
    const updatedCart = addToCart(cart, productId);
    cartService.saveCart(userId, updatedCart)
          .then(
              response => { 
                  dispatch(success(updatedCart));
              }
          );
  };
  function success(updatedCart) { return { type: "UPDATE_CLIENTS_CART_STATE", updatedCart } }
}

export function removeFromCart2(userId, cart, productId) {
  return dispatch => {
    const updatedCart = removeFromCart(cart, productId);
    cartService.saveCart(userId, updatedCart)
          .then(
              response => { 
                  dispatch(success(updatedCart));
              }
          );
  };
  function success(updatedCart) { return { type: "UPDATE_CLIENTS_CART_STATE", updatedCart } }
}

export function removeAllFromCart2(userId, cart, productId) {
  return dispatch => {
    const updatedCart = removeAllFromCart(cart, productId);
    cartService.saveCart(userId, updatedCart)
          .then(
              response => { 
                  dispatch(success(updatedCart));
              }
          );
  };
  function success(updatedCart) { return { type: "UPDATE_CLIENTS_CART_STATE", updatedCart } }
}


const addToCart = (cart, productId) => {
  const cartItem = itemInCart(cart, productId);
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, productId), { productId, quantity: 1 }]
    : [ ...cartWithoutItem(cart, productId), { ...cartItem, quantity: cartItem.quantity + 1 }];

}

const removeFromCart = (cart, productId) => {
  const cartItem = itemInCart(cart, productId);
   return cartItem.quantity === 1
     ? [ ...cartWithoutItem(cart, productId) ]
     : [ ...cartWithoutItem(cart, productId), { ...cartItem, quantity: cartItem.quantity - 1 } ]
}

const removeAllFromCart = (cart, productId) => {
   return [ ...cartWithoutItem(cart, productId) ]
}



const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)
      
    case 'UPDATE_CLIENTS_CART_STATE':
        return action.updatedCart;

    case 'USER_CART_RECIEVED':
          return action.userCart;
      
    case 'REMOVE':
      return removeFromCart(state, action.payload)
    
    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer;