const User = require('../Model/User');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => 
  {
  const { userName, password, email, firstName, lastName, dateOfBirth, role } = req.body;
  try {
    const existingUser = await User.findOne({ username: userName });
    if (existingUser) 
    {
      return res.status(400).json({ message: 'Username already taken' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User
    ({
      username: userName,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      dateOfBirth: new Date(dateOfBirth), 
      role: role || 'user', 
    });
    await user.save();

    res.status(201).json(user);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const loginUser = async (req, res) => 
  {
  const { userName, password } = req.body;
  try 
  {
    const user = await User.findOne({ username: userName });
    if (!user) 
    {
      return res.status(404).json({ message: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
    {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful' });
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
module.exports = 
{
  registerUser,
  loginUser,
};
