const express=require ('express')
const { verifiorg,getAllOrgReq } = require('../controller/orgController')
const router=express.Router()


router.post('/verify',verifiorg)
router.get('/', getAllOrgReq)

module.exports=router