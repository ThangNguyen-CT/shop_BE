require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product')
const app = express();
const port = process.env.port || 3000;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.get('/',async(req,res)=>{
    res.send({title : 'Products ne'})
});

app.get('/products',async (req,res)=>{
    if(Product){
        res.send("Danh sach san pham ne");
        res.json(Product);
    }else{
        res.send("Error");
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!");
});