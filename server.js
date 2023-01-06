require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const UserModel = require("./models/user.model");
const router = require("./routes/auth");
const MONGO_URL = process.env.URL_MONGO;
const app = express();
app.use(cors());
app.use(express.json()); //to parse body of the request
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth",router) //whenever a req comes in this middleware catches it and check if it is this /api/auth and will redirect to auth router. 

app.get("/", (req, res) => {
  res.send("welcome to backend");
});


//Mongodb connect with server
mongoose.set("strictQuery", true);
app.listen(PORT, async () => {
  try{
   await mongoose.connect(MONGO_URL)
   console.log("db connected");
  }catch(err){
    console.log(err)
  }
});
