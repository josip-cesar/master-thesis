export const productService = {

    getAllProducts

};

function getAllProducts() {
        fetch('/product-service/productList')
        .then(response => response.json())
        .then(data => console.log(data));
}