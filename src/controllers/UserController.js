const UserModel = require('../models/UserModel');
const OTPModel = require('../models/OTPModel');
const SendEmailUtility = require('../utility/SendEmailUtility');
const jwt = require('jsonwebtoken');



//Registration
exports.Registration = async (req,res)=>{
    let reqBody = req.body;
    
    try{
        let result = await UserModel.create(reqBody);
        res.status(200).json({status:"success", message:result})
    }
    catch(error){
        res.status(200).json({status:"failed to complete registration", message:error})
    }
}


//Login
exports.Login = async (req,res) => {
    try{
        let reqBody = req.body;
        let result = await UserModel.find(reqBody).count();
        if(result===1){
            // Create Token
            let Payload={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data:reqBody['email']
            }
            let token=jwt.sign(Payload,"SecretKey123456789");
            res.status(200).json({status:"success",message:token})
        }
        else{
            // Login fail
            res.status(200).json({status:"fail",message:"No User Found"})
        }
    }
    catch(error){
        res.status(200).json({status:"fail",message:error})
    }

}


//Profile Update --> face some problem to update the profile
exports.ProfileUpdate = async (req,res)=>{
    try{
        let email = req.headers['email'];
        let reqBody = req.body;
        let result=await UsersModel.updateOne({email: email}, reqBody)
        res.status(200).json({status:"success",message:result})
    }catch (error) {
        res.status(200).json({status:"fail",message:error})
    }
}


//Profile Details
exports.ProfileDetails=async (req,res)=>{
    try {
        let email= req.headers['email'];
        let result= await UsersModel.find({email:email});
        res.status(200).json({status:"success",data:result})
    }
    catch (error) {
        res.status(200).json({status:"fail",data:error})
    }
 }