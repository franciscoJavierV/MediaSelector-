const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
});

const Movie = mongoose.model('movie', movieSchema);


exports.user = User;