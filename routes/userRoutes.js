const express = require('express');
const passwordUpdate = require('../controller/user/passwordUpdate');
const loginUser = require('../controller/user/userLogin');
const { addUser } = require('../controller/user/userRegister');

const getUser=require('../controller/user/getUser');
const { passwordValidation, userValidation } = require('../middlewares/userValidation');

const route =express.Router();


route.post('/',userValidation,addUser);

route.post('/login',loginUser);

route.post('/update-password',passwordValidation,passwordUpdate);
// route.get('/g',gue)

module.exports=route