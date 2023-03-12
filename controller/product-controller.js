const Products = require("../models/Product");
class Product{
    async getall(req,res){
        try {
            const data = await Products.find();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
    async adddata(req,res){
        try {
            const data = new Products(req.body);
            const newProduct = await data.save();
            res.status(200).json(newProduct);
        } catch (error) {
            console.log(error);
        }
    }
    async updatedata(req,res){
        try {
            const data = await Products.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(data);
          } catch (error) {
            console.log(error)
          }
    }
    async deletedata(req,res){
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.status(200).json("Product has been deleted...");
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Product();
