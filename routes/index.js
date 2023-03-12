const Product = require("./products-model");

function route(app){
    app.use('/api/products',Product)
}

module.exports = route;