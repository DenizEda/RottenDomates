const router = require('express').Router();

router.use('/movies', require('./movies')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

//404 errors
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });


module.exports = router;