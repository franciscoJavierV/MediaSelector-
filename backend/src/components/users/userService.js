const { user } = require("./user");

async function findById(userid) {
  const users = await user.findById(userid);
  return users;
}

async function getAll() {
  const allusers = await user.find();
  return allusers;
}

async function createUser( data ){
  console.log(data)
    const { name, likedmovies , selections } = data;  
    const newUser = await user.create({
      name,
      likedmovies,
      selections
    });
    return newUser; 
  }

module.exports = {
  createUser,
  getAll,
  findById
};