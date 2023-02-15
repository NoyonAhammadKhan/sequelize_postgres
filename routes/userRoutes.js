const express = require('express');
const passwordUpdate = require('../controller/user/passwordUpdate');
const loginUser = require('../controller/user/userLogin');
const { addUser } = require('../controller/user/userRegister');


const route =express.Router();


route.post('/',addUser);

route.post('/login',loginUser);

route.post('/uppass',passwordUpdate);

module.exports=route