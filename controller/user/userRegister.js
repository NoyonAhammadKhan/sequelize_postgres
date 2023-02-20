
// const User = require('../../models/userModel')
const bcrypt = require('bcrypt');
const {db}=require('../../config/db');
const User = db.user;

async function hashPW(password){
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword
}

async function addUser(req,res){
    const {fullName, email}=req.body;
    
    
    const password = await bcrypt.hash(req.body.password, 10);
    const alreadyExistsUser = await User.findOne({
        where:{
            email:email
        }
    }).catch((err)=>{
        console.log("Error",err)
    })
    // console.log(hashedPassword)
    if(alreadyExistsUser){
        return res.json({message:"User with email already exists"});
    }
    const newUser = new User({fullName, email, password});
    let savedUser;
   try{
         savedUser= await newUser.save().catch((err)=>{
        console.log("Error",err);
        res.json({error:"Cannot register user at this moment"})
    })
   }catch(e){
        console.log(e)
   }
    
    if(savedUser) res.json({message:"Thanks for registering"})

}


module.exports={
    addUser,
}

