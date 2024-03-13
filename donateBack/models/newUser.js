const mongoose= require('mongoose')
const bcrypt=require('bcryptjs')
var validator = require('validator');
const { hash } = require('bcrypt')


const newUser= mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        require:true,
        unique:true
    },

    role:{
        type: String,
        default: 'user'
      },

    active:{
        type: Boolean,
        default:false
    }
})

newUser.statics.signup=async function(email,password){


    if(email==''||password ==''){
        throw Error("both field must be required")

    }

    if(!validator.isEmail(email)){
        throw Error("please enter a valid email")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("please enter a valid password")
    }
 
    const exists=await this.findOne({email})

    if(exists){
        throw Error("email is alrady exist")
    }

    
        const salt=await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)
        const newuser=await this.create({email, password: hash})
    

return newuser
}


//login

newUser.statics.login=async function(email, password, role, active){

if(!email||!password){
    throw Error("both field must ")
}
console.log(role)
console.log(active)
const newuser= await this.findOne({email})


    const match=bcrypt.compare(password, newuser.password)

    if(!match){
        throw Error("invalid password")
    }
    return newuser
    
}


module.exports=mongoose.model('userSchema',newUser)