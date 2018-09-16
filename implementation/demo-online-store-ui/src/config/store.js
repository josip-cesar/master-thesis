import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from "../features/cart/reducer";
import checkoutReducer from '../features/checkout/reducer';
import registratonReducer from "../features/registration/reducer";
import  loginReducer  from "../features/login/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
  register: registratonReducer,
  login: loginReducer
});


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store