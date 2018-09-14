
import {orderService} from "../../_services/orderService";



function createOorder(order) {
        orderService.createOrder(order)
            .then(
                response => {
                    console.log("Order created")
                    // dispatch(success(response));
                },
                error => {
                    // dispatch(failure(error.toString()));
                }
            );
    // function success(response) { return { type: "CREATE_ORDER_SUCCESS", response } }
    // function failure(error) { return { type: "CREATE_ORDER_FAILURE", error } }
};




const checkoutReducer = (state={}, action) => {
    switch(action.type) {
        case 'CREATE_ORDER_REQUEST':
            createOorder(action.payload);
            return state;
        case 'CREATE_ORDER_SUCCESS':
            return {orderCreated: true};
        case 'CREATE_ORDER_FAILURE':
        return {orderCreated: false};
      default:
        return state;
    }
  }
  
  export default checkoutReducer;