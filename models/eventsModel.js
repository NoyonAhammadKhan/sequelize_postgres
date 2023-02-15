
const {DataTypes}=require("sequelize");

// const sequelize = require("../database");
const {sequelize} = require('./../config/db.config')



const Event = sequelize.define("Event",{
    eventName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    details:{
        type:DataTypes.STRING,
        allowNull:false
    },
    eventCreator:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    eventCreatedDate:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    eventDate:{
        type:DataTypes.DATE,
        allowNull:false
    }
})


module.exports=Event
