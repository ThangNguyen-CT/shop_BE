require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.port || 3000;
const cors = require("cors");
const route = require('./routes/index');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

route(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Backend server is running in http://locallhost:${port}`);
});