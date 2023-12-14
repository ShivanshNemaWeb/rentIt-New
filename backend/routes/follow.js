const express = require('express');
const router = express.Router();
const {followController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');

//Like a product
router.post('/follow',authenticate,followController.follow);

//Dislike a product (Remove Like)
router.post('/unfollow',authenticate,followController.unfollow);

module.exports = router;