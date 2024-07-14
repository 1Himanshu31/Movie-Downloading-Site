const ratingService = require('../Services/ratingService');

const createRating = async (req, res) => 
  {
  try 
  {
    const rating = await ratingService.createRating(req.body);
    res.status(201).json(rating);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const getRating = async (req, res) => 
  {
  try 
  {
    const rating = await ratingService.getRatingById(req.params.id);
    if (!rating) 
    {
      return res.status(404).json({ message: 'Rating not found' });
    }
    res.json(rating);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
module.exports = 
{
  createRating,
  getRating,
};
