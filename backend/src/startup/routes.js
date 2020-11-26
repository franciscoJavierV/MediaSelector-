const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
//Model
const userComponent = require('../components/users');
//const moviesComponent = require('../components/movies');

module.exports = (app) => {
    // Configuración de middlewares
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({extended:false}))
    app.use(bodyParser.json())
    const corsOptions = {
      origin: '*',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    };
    app.use(cors(corsOptions));
  
    // Configuración componentes
    app.use('/users', userComponent.routes);
//    app.use('/movies', moviesComponent.routes)

};
