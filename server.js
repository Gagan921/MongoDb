const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");
const dotenv = require('dotenv');
dotenv.config({path:'./config/.env'})

const app = express();

app.use(express.json());

const connectDB= async()=>{
  const conn = await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true 
  });
console.log("It is connected")
}
connectDB();
app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});
