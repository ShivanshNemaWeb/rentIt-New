const express = require('express');
const router = express.Router();
const {likeController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');

//Like a product
router.post('/like',authenticate,likeController.like);

//Dislike a product (Remove Like)
router.post('/dislike',authenticate,likeController.dislike);

module.exports = router;