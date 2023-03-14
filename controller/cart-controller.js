const Cart = require('../models/Cart');
class cart{
    async getall(req,res){
        try {
            const datas = await Cart.find();
            res.status(200).json(datas);
        } catch (error) {
            console.log(error);
        }
    }
    async getdata(req,res){
        try {
            const datas = await Cart.find({ userId: req.params.userId });
            res.status(200).json(datas);
          } catch (error) {
            console.log(error);
          }
    }
    async adddata(req,res){
        try {
            const data = new Cart(req.body);
            const newdata = await data.save();
            res.status(200).json(newdata)
        } catch (error) {
            console.log(error);
        }
    }
    async updatedata(req,res){
        try {
            const data = await Cart.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(data);
          } catch (error) {
            console.log(error);
          }
    }
    async deletedata(req,res){
        try {
            await Cart.findByIdAndDelete({ userId: req.params.userid });
            res.status(200).json("Cart has been deleted...");
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new cart();