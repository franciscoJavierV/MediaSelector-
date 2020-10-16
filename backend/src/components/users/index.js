const express = require('express');
const userCtrl = require('./userController');


const router = express.Router();

//services

router.get('/add', userCtrl.prueba);
router.get('/one', userCtrl.getUserInfo);

router.post('/new' , userCtrl.create);
router.post('/selections' , userCtrl.selections);
router.post('/likeslist', userCtrl.likedmovies);

module.exports.routes = router;