const express = require("express")
const {upload} = require("../multer")
const user = require("../Model/user")
const path = require('path')
const ErrorHandler = require('../util/Error')

const router = express.Router();

router.post('/create',upload.single("file"),async(req,res,next)=>{
    try{
    const {name,email,password} = req.body;
    const existUser = user.findOne(email);
    if(existUser){
        return res.status(400).send({message:"user already registered"})
    }
    const createUser = new user({
        name,email,password

    })
    await createUser.save();
    console.log(createUser)
}
catch(e){
    console.log(e.message);
}
})

router.post('/login',async(req,res)=>{
try
    {    const {email,password} = req.body
    if(!email||!password){
        return next(new ErrorHandler("all fields are required",400))
    }
    const user = await user.findOne({email}).select('password')
    if(!user)
        return next(new ErrorHandler("user is not there",400))
    const passwordValid = user.ComparePassword(password)
    if(!passwordValid){
        return next(new ErrorHandler("Password is incorrect ",400))

    }}

catch(e){
    return next(new ErrorHandler(error.message,500))
}
})


module.exports = router