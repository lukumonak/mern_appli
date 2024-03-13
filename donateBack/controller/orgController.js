//organization verify  and save in database

const newOrganization = require('../models/newOrganization')
const mongoose = require('mongoose')

verifiorg = async (req, res) => {
    const { Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link } = req.body

    try {

        if(!Organization_full_name||!Organization_full_name||!District||!pincode||!contect_no){
            throw Error("please fill all required")
        }

        const exist = await newOrganization.findOne({ contect_no:contect_no })
        const exist1 = await newOrganization.findOne({ Organization_register_number:Organization_register_number })


            if(exist){
                throw Error("contect number already exist")
            }

            if(exist1){
                throw Error("organsdf number already exist")
            }


        const uploadOrg = await newOrganization.create({ Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link })
        res.status(200).json(uploadOrg)
        console.log(Organization_full_name, Organization_register_number, District, pincode, contect_no, website_link)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//geting the value in admin panel to get the value
getAllOrgReq=async(req,res)=>{
    const AllorgReq=await newOrganization.find({})
    res.status(200).json(AllorgReq)

}

module.exports = {
    verifiorg,
    getAllOrgReq
}