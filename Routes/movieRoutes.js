const express = require('express');
const movieController = require('../Controllers/movieController');
const auth = require('../auth');

const router = express.Router();

router.post('/', movieController.createMovie);
router.get('/id', movieController.getMovie);
router.get('/', movieController.getAllMovies);

module.exports = router;
