const Joi = require('joi');


const userValidationSchema = Joi.object().keys({
    fullName:Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required()
});

const passwordValidationSchema=Joi.object().keys({
    email:Joi.string().email().required(),
    oldPassword:Joi.string().required(),
    newPassword:Joi.string().required(),
})


async function userValidation(req,res,next){
    const {error}=userValidationSchema.validate(req.body,{aboutEarly:false});

    if(error){
        res.status(500).json({message:"validation failed"})
    }else{
        next();
    }
}

async function passwordValidation(req,res,next){
    const {error}=passwordValidationSchema.validate(req.body,{aboutEarly:false});

    if(error){
        res.status(500).json({message:"password validation failed"});
    }else{
        next();
    }

}

module.exports={
    userValidation,
    passwordValidation
}