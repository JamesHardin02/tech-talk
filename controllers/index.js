const router = require('express').Router();
// api routes
const apiRoutes = require('./api/');

// use end api endpoints folder if /api
router.use('/api', apiRoutes);

module.exports = router;
