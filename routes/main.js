const express = require('express');
const router = express.Router();
const path = require('path');
const register_create = require('./create');
const checkEmail = require('./checkEmail');
const checkAuth = require('../utils/checkAuth')

//Allow users access folder Public
// router.use(express.static(path.join(process.cwd(), 'Public')));

////Allow users access folder Private
//Check also if user is authenticated 
// router.use(checkAuth, express.static(path.join(process.cwd(), 'Private')));
// router.use(express.static(path.join(process.cwd(), 'Private')));

router.use('/', checkEmail);
router.use('/register', register_create);

module.exports = router;

