const {db}=require('../../config/db')
const User = db.user;
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');

const setJWT=require('../../jwt/setJWT');

async function passwordUpdate(req,res){
   try{
    const {oldPassword,newPassword,email}=req.body;
    console.log(req.body)

    const userWithEmail = await User.findOne({where:{email}}).catch((err)=>{
        console.log(err)
    })
    console.log(userWithEmail)

    const validPassword = await bcrypt.compare(oldPassword, userWithEmail.dataValues.password);
    console.log(validPassword)

    if(!validPassword){
        return res.status(400).json({"message":"your put wrong password.put correct password to update new password"});
    }
    const password = await bcrypt.hash(newPassword, 10);
    User.update({ password},{where:{email:email}}).then(upRes=>{
    
    if(upRes.length==1){
        return res.status(200).send({"message":"password updated"})
    }
    })
    .catch(err=>console.log(err))

    // console.log(data,"data")
   }catch(e){
    console.log(e)
   }


}




module.exports=passwordUpdate
