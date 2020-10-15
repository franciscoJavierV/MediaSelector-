const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  likedmovies  : {
      type: Array,
      required:false
  },
  selections : {
      type: Array,
      required: false
  },
});

const User = mongoose.model('user', userSchema);


exports.user = User;

