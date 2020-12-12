// api/movies.js
const router = require('express').Router();

// matches GET requests to /api/movies/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/movies/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/movies/:movieId
router.put('/:movieId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/movies/:movieId
router.delete('/:movieId', function (req, res, next) { /* etc */});

module.exports = router;