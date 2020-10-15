const express = require('express');
const userCtrl = require('./userController');


const router = express.Router();

//services

router.get('/add', userCtrl.getUserInfo);


module.exports.routes = router;