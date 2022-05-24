const router = require('express').Router();

// api endpoints
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

// uses end point modules to find route
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;