const jwt=require('jsonwebtoken')
const newUser=require('../models/newUser')

const layerAuth=async(req, res, next)=>{
    const{authorization}=req.headers
    if (!authorization) {
        return res.status(401).json({error:'Authorixation token require'})
    }
   
    
    const token=atob(authorization.split(' ')[1])
    const parseToken=JSON.parse(token)
    const rolefromDB=parseToken.role
    return rolefromDB
}


  const isAuthorizeUser=(role)=>{
     if(!role==layerAuth){
         return (res.status(400).json({error:'Request is not authorize'}))
     }
     next()
 }
module.exports=layerAuth,isAuthorizeUser;