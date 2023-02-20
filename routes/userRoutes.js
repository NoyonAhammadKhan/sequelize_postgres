const express = require('express');
const passwordUpdate = require('../controller/user/passwordUpdate');
const loginUser = require('../controller/user/userLogin');
const { addUser } = require('../controller/user/userRegister');

const getUser=require('../controller/user/getUser');

const route =express.Router();


route.post('/',addUser);

route.post('/login',loginUser);

route.post('/uppass',passwordUpdate);
route.get('/g',getUser)
module.exports=route