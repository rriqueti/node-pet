const router = require('express').Router();
const register_interested = require('./createInterested');
const checkEmail = require('./checkEmail');


// const apiRoutes = require('./api');

router.use('/', checkEmail);
router.use('/register', register_interested);

module.exports = router;

