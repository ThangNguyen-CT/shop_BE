const User = require('../models/User');
const  CryptoJS = require("crypto-js");
class user{
    async getall(req,res){
        try {
            const data = await User.find();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    }
    async dangky(req,res){
        try {
            const data = new User({
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(
                  req.body.password,
                  process.env.PASS_SEC
                ).toString(),
              });
              
            const newdata = await data.save();
            res.status(200).json(newdata);
        } catch (error) {
            console.log(error);
        }
    }
    async dangnhap(req,res){
        try{
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
              res.status(404).json("Incorrect username");
            }
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    
            const inputPassword = req.body.password;
            
            originalPassword !== inputPassword && res.status(401).json("Wrong Password");
      
           res.status(200).json(req.body);
    
        }catch(error){
            console.log(error);
        }
    }
    async updatedata(req,res){
        try {
            const data = await User.findByIdAndUpdate( 
                req.params.id,
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: CryptoJS.AES.encrypt(
                        req.body.password,
                        process.env.PASS_SEC
                    ).toString(),
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
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted !');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new user();