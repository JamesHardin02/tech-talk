const router = require('express').Router();
// routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

// if '/' use homeroutes file
router.use('/', homeRoutes);
// use end api endpoints folder if /api
router.use('/api', apiRoutes);

module.exports = router;
