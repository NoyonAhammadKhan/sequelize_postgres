const Sequelize =require('sequelize');

const sequelize = new Sequelize('postgres_exam','postgres','noyon',{
    host: 'localhost',
    dialect:'postgres' 
})


function connectDB(){
    try{
        sequelize.authenticate()
        .then(()=>{
        console.log('database is connected to postgresql server ')
    })
        .catch((err)=>console.log(err))
    }catch(e){
        console.log(e)
    }

    sequelize.sync()
}

module.exports={
    sequelize,
    connectDB
}