const mongoose = require('mongoose');

require('dotenv').config({path:'.env'})
mongoose.connect('mongodb+srv://fullstack:1234@fullstack.3grtg.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true , 
    useUnifiedTopology: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));
