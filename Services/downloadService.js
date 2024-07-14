const Download = require('../Model/Download');

const createDownload = async (downloadData) => 
{
  const download = new Download(downloadData);
  await download.save();
  return download;
};
const getDownloadsByUserId = async (userId) => 
{
  return Download.find({ user: userId }).populate('movie');
};
module.exports = 
{
  createDownload,
  getDownloadsByUserId,
};
