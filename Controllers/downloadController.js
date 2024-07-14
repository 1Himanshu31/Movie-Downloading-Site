const downloadService = require('../Services/downloadService');

const createDownload = async (req, res) => 
  {
  try 
  {
    const download = await downloadService.createDownload
    ({
      user: req.user._id,
      movie: req.body.movieId
    });
    res.status(201).json(download);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
const getDownloads = async (req, res) => 
  {
  try 
  {
    const downloads = await downloadService.getDownloadsByUserId(req.user._id);
    res.json(downloads);
  } 
  catch (error) 
  {
    res.status(400).json({ message: error.message });
  }
};
module.exports = 
{
  createDownload,
  getDownloads,
};
