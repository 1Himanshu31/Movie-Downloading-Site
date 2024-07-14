const Admin = require('../Model/Admin');

const createAdmin = async (adminData) => 
{
  const admin = new Admin(adminData);
  await admin.save();
  return admin;
};
const getAdminById = async (id) => 
{
  return Admin.findById(id);
};
const getAdminByUsername = async (username) => 
{
  return Admin.findOne({ username });
};
module.exports = 
{
  createAdmin,
  getAdminById,
  getAdminByUsername,
};
