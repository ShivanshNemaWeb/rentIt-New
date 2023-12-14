const express = require('express');
const router = express.Router();
const {userController} = require('../controllers');

router.get('/getUser/:userId',userController.getUser);

module.exports = router;