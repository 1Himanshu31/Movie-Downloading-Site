const Movie = require('../Model/Movie');

const createMovie = async (movieData) => 
{
  const movie = new Movie(movieData);
  await movie.save();
  return movie;
};
const getMovieById = async (id) => 
{
  return Movie.findById(id).populate('rating');
};
const getAllMovies = async () => 
{
  return Movie.find().populate('rating');
};
module.exports = 
{
  createMovie,
  getMovieById,
  getAllMovies,
};
