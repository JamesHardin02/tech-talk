const router = require('express').Router();
// api routes
const apiRoutes = require('./api/');

// if api route use api folder
router.use('/api', apiRoutes);

module.exports = router;
