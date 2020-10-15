require('dotenv').config();

const config ={
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  
  //database
  MONGODB_URI : process.env.MONGODB_URI,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,

};
module.exports = {config};
