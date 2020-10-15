const userService = require('./userService');

async function getUserInfo(req, res) {
  console.log(req.body)
  const user = await userService.findById(req.body.id);
  res.send(user);
}

async function create(req ,res){
  console.log(req.body)
  const {name, likedmovies , selections } =  req.body
  const data = {
    name,
    likedmovies , selections
  }
  const newUser = await userService.createUser(data);
  return res.send(newUser);
}

async function prueba(req, res){
  console.log(req.body)
  return res.redirect('/sin')
}

module.exports = {
    getUserInfo,
    create,
    prueba,
};
