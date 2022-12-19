const express= require("express")
require("dotenv").config()
const cors= require("cors");
const PORT= process.env.PORT || 8080
const mongoose= require("mongoose")
const MONGO_URL= process.env.URL_MONGO
const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.json({"status":"ok", "msg":"welcome to backend"})
})
mongoose.set('strictQuery', true);
app.listen(PORT,async()=>{
    mongoose.connect(MONGO_URL).then(()=>{
        console.log("db connected")
    }).catch((err) => console.log(err));
    })
