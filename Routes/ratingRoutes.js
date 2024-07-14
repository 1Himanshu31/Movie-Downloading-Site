const express = require('express');
const ratingController = require('../Controllers/ratingController');
const auth = require('../auth');

const router = express.Router();

router.post('/', auth, ratingController.createRating);
router.get('/:id', auth, ratingController.getRating);

module.exports = router;
