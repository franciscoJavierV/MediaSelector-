const userService = require('./userService');

async function getUserInfo(req, res) {
  console.log('params', req.query)
  console.log(req.body)
  const user = await userService.findById(req.query.id);
  res.send(user);
}

async function selections(req, res) {
  const user = await userService.findById(req.body.id);
  const selections = req.body.selections;
  console.log("old user",user)
  user.selections = selections
  console.log("new user", user)
  res.send(user);
}

async function likedmovies(req, res) {
  const user = await userService.findById(req.body.id);
  const likedmovies = req.body.likedmovies;
  console.log("old user",user)
  user.likedmovies = likedmovies
  console.log("new user", user)
  res.send(user);
}


async function create(req ,res){
  console.log('body',req.body)
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
  res.send('works')
}

module.exports = {
    getUserInfo,
    create,
    prueba,
    selections,
    likedmovies
};
