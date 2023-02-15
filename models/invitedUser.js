
const {DataTypes}=require("sequelize");

// const sequelize = require("../database");

const sequelize = require("./../config/database");



const InvitedUser=sequelize.define("InvitedUser",{
    email:{
        type:DataTypes.STRING,
        allowNull:false        
    }
})



module.exports=InvitedUser
