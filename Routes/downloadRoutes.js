const express = require('express');
const downloadController = require('../Controllers/downloadController');
const auth = require('../auth');

const router = express.Router();

router.post('/', auth, downloadController.createDownload);
router.get('/', auth, downloadController.getDownloads);

module.exports = router;
