const movieService = require('./movieService');

async function getMovieInfo(req, res) {
  console.log(req.body)
  const movies = await movieService.findById(req.body.id);
  res.send(movies);
}

async function createMovie(req ,res){
  console.log(req.body)
  const { name, description, duration, gender, director } =  req.body
  const data = {
      name,
      description,
      duration,
      gender,
      director,
  }
  const newMovie = await movieService.createMovies(data);
  return res.redirect('/movies');
}

async function getAll(req , res) {
  const movies = await movieService.getAll();
  console.log(movies)
  return res.redirect('/');
}


module.exports = {
    getAll,
    createMovie,
    show_Kfights,
};
