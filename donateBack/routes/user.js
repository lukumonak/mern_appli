const express= require ('express')
const {loginUser,signUpUser}=require('../controller/userController')
const { updateUser } = require('../controller/userController')



const router=express.Router()

//login
router.post('/login',loginUser)


//signUp
router.post('/signUp',signUpUser)


router.patch('/permission/:id',updateUser) //permission




module.exports=router