const express = require('express');
const multer = require('multer');
const {productController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');
const product = require('../models/product');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//create new product
router.post('/createProduct',authenticate, upload.fields([{ name: 'first-img', maxCount: 1 }, { name: 'second-img', maxCount: 1 },
{ name: 'thired-img', maxCount: 1 },{ name: 'fourth-img', maxCount: 1 },{ name: 'fifth-img', maxCount: 1 }]), productController.createProduct);

//Get Products
router.get('/getProducts/:storeId',productController.getProducts);

//Delete product
router.delete('/deleteProducts/:productId',authenticate,productController.deleteProduct);

//Get Wedding Products
router.get('/getWeddingProducts/:userId',productController.getWeddingProducts);

//Get Party Products
router.get('/getPartyProducts/:userId',productController.getPartyProducts);

//Get Traditional Products
router.get('/getTraditionalProducts/:userId',productController.getTraditionalProducts);

//Get followed store products 
router.get('/getFollowedProducts/:userId',productController.getFollowedProducts);


module.exports = router;