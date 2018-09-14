
export const cartService = {

    saveCart,
    loadUsersCart

};

function saveCart(userId, cart) {
    
    console.log("slanje zahtjeva saveCart");
    console.log(cart);
    const payload = {userId, cartItems: cart};

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch(`/cart-service/saveCart`, requestOptions);
}


function loadUsersCart(userId) {
    return fetch(`/cart-service/retriveUsersCart/` + userId)
    .then(response => response.json());
}
