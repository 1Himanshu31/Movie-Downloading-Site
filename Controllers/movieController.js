const movieService = require('../Services/movieService');

const createMovie = async (req, res) =>
  {
  try 
  {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const getMovie = async (req, res) => 
  {
  try 
  {
    const movie = await movieService.getMovieById(req.params.id);
    if (!movie) 
    {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const getAllMovies = async (req, res) => 
  {
  try 
  {
    const movies = await movieService.getAllMovies();
    res.json(movies);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
module.exports = 
{
  createMovie,
  getMovie,
  getAllMovies,
};
