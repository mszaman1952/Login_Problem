const express = require('express');
const { registrationUser, userLogin } = require('../controller/userController');
const router = express.Router();

// register User 
router.post('/registration', registrationUser);
// login User 
router.post('/userLogin', userLogin)

module.exports = router;