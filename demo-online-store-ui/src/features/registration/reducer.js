
import {userService} from "../../_services/userService";
import { history } from '../../history';

export function register(user) {
    console.log("register");
    // return dispatch => {
        userService.register(user)
            .then(
                user => {
                    console.log("registravija gotova");
                    // dispatch(success(user));
                    history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    // };
    // function success(user) { return { type: "REGISTRATION_SUCCESS", user } }
    // function failure(error) { return { type: "REGISTRATION_FAILURE", error } }
};


const registrationReducer = (state={}, action) => {
    switch(action.type) {
        case 'REGISTRATION_REQUEST':
            register(action.payload);
            return state;
      default:
        return state;
    }
  }
  
  export default registrationReducer;