const jwt=require('jsonwebtoken')
const newUser=require('../models/newUser')

const requireAuth=async(req, res, next)=>{
    const{authorization}=req.headers
    if (!authorization) {
        return res.status(401).json({error:'Authorixation token require'})
    }

    const token=authorization.split(' ')[1]

    try{
        const{_id}=jwt.verify(token, process.env.SECRET)
        console.log({_id})
        req.user=await  newUser.findOne({_id}).select('id')
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error:'Request is not authorize'})
    }
}
module.exports=requireAuth;