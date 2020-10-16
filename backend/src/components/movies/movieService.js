const { movie } = require("./movie");


async function getAll() {
  const movies = await movies.find();
  return users;
}

async function createMovies( data ){
  console.log(data)
    const { name, description, duration, gender, director } = data;  
    const newMovie = await movies.create({
        name, 
        description, 
        duration, 
        gender, 
        director,
    });
    return newMovie; 
  }

module.exports = {
  createMovies,
  getAll,
};