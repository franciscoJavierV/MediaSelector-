const express = require('express');
const movieCtrl = require('./movieController');


const router = express.Router();

//services

router.post('/newMovie' , movieCtrl.createMovie);

module.exports.routes = router;