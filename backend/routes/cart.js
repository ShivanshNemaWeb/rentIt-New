const express = require('express');
const router = express.Router();
const {cartController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');

//Add an item to cart
router.post('/addItem',authenticate,cartController.addItem);

//Get All items by UserId
router.get('/getItems/:userId',authenticate,cartController.getItems);

//Delete Item
router.delete('/deleteItem',authenticate,cartController.deleteItem);

module.exports = router;

