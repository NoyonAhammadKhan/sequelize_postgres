// const express = require('express')
const {db}=require('../../config/db')
const User = db.user;
const InvitedGuest=db.guest;
const Event = db.event;
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
        let createdEvent = await User.findAll({
            attributes:[],
            include:[
                {
                    model:Event,
                    as:'userEvents',
                    attributes:['eventName','eventDetails','eventDate']
                }
            ],
            where:{email:email}
        })
        let invitedEvent = await InvitedGuest.findAll({
            attributes:[],
            include:[
                {
                    model:Event,
                    as:'guestEvent',
                    attributes:['id','eventName','eventDetails','eventDate']
                }
            ],
            where:{email:email}
            
        })
        
        // ----------------------------------------
        const jwtToken=setJWT(userWithEmail.id,userWithEmail.email)
        return  res.json({message:"Welcome Back",token:jwtToken,invitedEvent:invitedEvent,createdEvent:createdEvent})
    }else{
        return res.status(400).send('Invalid Email or Password.')
    }
}

module.exports=loginUser