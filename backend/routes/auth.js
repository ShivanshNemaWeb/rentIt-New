const express = require('express');
const { authController } = require('../controllers');
const router = express.Router();

//Login/Sign-in API
router.post('/login', authController.login);

//Register/Sign-up API
router.post('/register',authController.register);

module.exports=router;