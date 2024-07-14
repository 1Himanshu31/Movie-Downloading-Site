const adminService = require('../Services/adminService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerAdmin = async (req, res) => 
  {
  try 
  {
    const admin = await adminService.createAdmin(req.body);
    res.status(201).json(admin);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const loginAdmin = async (req, res) => 
  {
  try 
  {
    const admin = await adminService.getAdminByUsername(req.body.username);
    if (!admin) 
    {
      return res.status(404).json({ message: 'Admin not found' });
    }
    const isMatch = await bcrypt.compare(req.body.password, admin.password);
    if (!isMatch) 
    {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id, role: 'admin' }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
module.exports = 
{
  registerAdmin,
  loginAdmin,
};
