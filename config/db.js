const {Sequelize,Model,DataTypes} =require('sequelize');

const sequelize = new Sequelize('postgres_exam','postgres','noyon',{
    host: 'localhost',
    dialect:'postgres' 
})


// People.hasMany(Event);
// Event.belongsTo(People);


function connectDB(){
   
}

try{
    sequelize.authenticate()
    .then(()=>{
    console.log('database is connected to postgresql server ')
})
    .catch((err)=>console.log(err))
}catch(e){
    console.log(e)
}


const db={}
db.sequelize=sequelize;
db.Sequelize=Sequelize;



db.user=require('../models/userModel')(sequelize, DataTypes);
db.event=require('../models/eventsModel')(sequelize,DataTypes);
db.guest=require('../models/invitedGuestModel')(sequelize,DataTypes)

// db.user.hasMany(db.contact,{foreignKey:'user_id',as:'contactDetails'});
// db.contact.belongsTo(db.user,{foreignKey:'user_id',as:'userDetails'});

db.user.hasMany(db.event,{foreignKey:'UserId',as:'userEvents'});
db.event.belongsTo(db.user,{foreignKey:'UserId',as:'userEvents'});

db.event.hasMany(db.guest,{foreignKey:'EventId',as:'guestEvent'});
db.guest.belongsTo(db.event,{foreignKey:'EventId',as:'guestEvent'});

sequelize.sync({force:false})


module.exports={
    sequelize,
    connectDB,
    db
}