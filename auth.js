const jwt = require('jsonwebtoken');

const auth = (req, res, next) => 
  {
  const authHeader = req.header('Authorization');
  if (!authHeader) 
  {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  const token = authHeader.replace('Bearer ', '');
  try 
  {
    const decoded = jwt.verify(token, 'secret'); 
    req.user = decoded;
    next();
  } 
  catch (error) 
  {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = auth;
