const Products = require("../models/Product");
class Product{
    async getall(req,res){
        try {
            const data = await Products.find();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
    async addproduct(req,res){
        try {
            const data = new Products(req.body);
            const newProduct = await data.save();
            return res.status(200).json(newProduct);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Product();
