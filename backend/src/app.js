const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");

const corsOptions = 
{
  origin:"*",
  optionsSuccessStatus : 200,
}

//initializations
const app = express();  

//middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'));
app.use(cors(corsOptions));


require('dotenv').config();
// Configuración de routers
require('./startup/routes')(app);
// Inicialización de BD
require('./startup/database');

app.set('port' , process.env.PORT ||  3000);


//starting the server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
});

