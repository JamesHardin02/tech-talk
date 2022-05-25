const router = require('express').Router();
// routes
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// if '/' use home-routes.js file
router.use('/', homeRoutes);
// if /dashboard use dashboard-routes.js
router.use('/dashboard', dashboardRoutes);
// use end api endpoints folder if /api
router.use('/api', apiRoutes);

module.exports = router;
