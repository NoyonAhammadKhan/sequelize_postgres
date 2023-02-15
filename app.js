const express = require('express');
// const sequelize = require('./database');
const {sequelize,connectDB} = require('./config/db.config')
// const User = require('./User')
const bodyParser = require('body-parser');
const userRouter =require('./routes/userRoutes');
const eventRouter=require('./routes/eventRoutes')
const morgan = require('morgan');
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config()
// require('./auth/passport')


const app=express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//connect db
connectDB()

app.use('/user',userRouter);
// app.use('/event',eventRouter);



app.listen(3000,()=>{
  console.log('app is running')
})