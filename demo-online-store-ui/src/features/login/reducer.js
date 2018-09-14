
import {userService} from "../../_services/userService";
import { history } from '../../history';
import { loadUserCart } from "../cart/reducer";


export function login(email, password) {
    return dispatch => {

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));

                    dispatch(loadUserCart(user.id));

                    history.push('/');
                },
                error => {
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function success(user) { return { type: "LOGIN_SUCCESS", user } }
    // function loadUserCart(userId) { return { type: "LOAD_USER_CART", userId } }
    // function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


export function logout() {
    history.push('/login');
    return { type: "LOGOUT" };
}

const initialState = {
    loggedIn: false,
    loggedInUser: {}
  }

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            login(action.payload.email, action.payload.password);
            return state;
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                loggedInUser: action.user
            };
        case "LOGOUT": {
            return {
                loggedIn: false,
                loggedInUser: {}
            };
        }
      default:
        return state;
    }
  }
  
  export default loginReducer;