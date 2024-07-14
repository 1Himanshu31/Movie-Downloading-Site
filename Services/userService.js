const User = require('../Model/User');

const createUser = async (userData) => 
{
  const user = new User(userData);
  await user.save();
  return user;
};
const getUserById = async (id) => 
{
  return User.findById(id);
};
const getUserByUsername = async (username) => 
{
  return User.findOne({ username });
};
module.exports = 
{
  createUser,
  getUserById,
  getUserByUsername,
};
