const Rating = require('../Model/Rating');

const createRating = async (ratingData) => 
{
  const rating = new Rating(ratingData);
  await rating.save();
  return rating;
};
const getRatingById = async (id) => 
{
  return Rating.findById(id);
};
module.exports = 
{
  createRating,
  getRatingById,
};
