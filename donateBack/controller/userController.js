const newUser = require('../models/newUser');
var jwt = require('jsonwebtoken');
const mongoose= require('mongoose');

const createToken=(_id, role,active)=>{
    return  jwt.sign({_id,role,active}, process.env.SECRET, {expiresIn:'300d'})
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body
    
    try{
        const newuser=await newUser.login(email,password)
        const token=createToken(newuser. _id, newuser.role, newuser.active)
        res.status(200).json({email,token,message:"welcome"})

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const signUpUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const newuser=await newUser.signup(email,password)
        const token=createToken(newuser._id, newuser.role, newuser.active)
        res.status(200).json({email,token})
    
    } catch (error) {
        
        res.status(400).json({error:error.message})
    }

}
//permission 
// 
// const updateUser=()=>{
// 
// }


const updateUser=async(req,res)=>{
    // const {name,type,weight,pincode,landmark}=req.body
const {id}=req.params

    try{
        const updateuser=await newUser.updateOne({_id:req.params.id},{$set:{active:false}})
       return res.status(200).json(updateuser)
        console.log({pduct})
    }
    catch(error){
         return res.status(404).json({status:error.message})
    }

}

 
module.exports={
    loginUser,
    signUpUser,
    updateUser
}