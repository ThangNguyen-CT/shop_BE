const Product = require("./products-router");
const Cart = require("./cart-router");
const User = require("./user-router");

function route(app){
    app.use('/api/users',User);
    app.use('/api/products',Product);
    app.use('/api/carts',Cart);
}

module.exports = route;