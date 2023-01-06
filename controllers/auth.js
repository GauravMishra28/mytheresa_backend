const UserModel = require("../models/user.model")
const bcrypt= require("bcryptjs")

//REGISTER 
exports.register=async (req,res,next)=>{
    const{name,email,password}= req.body;
    try{
          const user= await UserModel.create({
          name,email,password
      })
      res.status(201).json({
        sucess:true,
        user
      })
    }catch(err){
    res.status(500).json({
        sucess:false,
        error:err.message
    })
    }
}
  
exports.login=async(req,res,next)=>{
    const{email,password}= req.body;

    if(!email || !password){
        res.status(400).json({
            sucess:false,
            error:"please provide email and password"
        })
    }
    try{
        const user = await UserModel.findOne({
                  email,password });

                  if(!user){
                    res.status(404).json({
                        sucess:false,
                        error:"Invalid credentials"
                    })    
                  }
                
                }catch(err){

    }
    res.send("login route")
}

exports.forgotpassword=(req,res,next)=>{
    res.send("forgot password route")
}

exports.resetpassword=(req,res,next)=>{
    res.send("reset password route")
}

