// const express = require('express')
const User = require('../../models/userModel');
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

const setJWT=require('../../jwt/setJWT');

async function loginUser(req,res){
    const {email,password}=req.body;

    const userWithEmail = await User.findOne({where:{email}}).catch((err)=>{
        console.log(err)
    })
    console.log("user",)

    if(!userWithEmail){
        return res.json({message:"Email does not match"})
    }

    
    const validPassword = await bcrypt.compare(req.body.password, userWithEmail.dataValues.password);

    if(validPassword){
        // const jwtToken = jwt.sign({id:userWithEmail.id, email:userWithEmail.email},process.env.JWT_SECRET)
        const jwtToken=setJWT(userWithEmail.id,userWithEmail.email)
        return  res.json({message:"Welcome Back",token:jwtToken})
    }else{
        return res.status(400).send('Invalid Email or Password.')
    }
    
}

module.exports=loginUser