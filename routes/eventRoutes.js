const express = require('express');
const createEvent = require('../controller/events/createEvent');
const getEvent = require('../controller/events/getEvents');
const inviteGuest = require('../controller/events/inviteGuest');
const updateEvent = require('../controller/events/updateEvent');

const route =express.Router();


route.post('/',createEvent);
route.post('/guest',inviteGuest);
route.get('/g',getEvent);
route.put('/',updateEvent)


module.exports=route