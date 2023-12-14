const express = require('express');
const multer = require('multer');
const {storeController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//create new store
router.post('/createStore',authenticate, upload.fields([{ name: 'cover-img', maxCount: 1 }, { name: 'profile-img', maxCount: 1 }]), storeController.createStore);

//Get store by user Id
router.get('/getStore/:userId', authenticate,storeController.getStore);

//Update store by Id 
router.post('/updateStore/:storeId',authenticate, storeController.updateStore);

//Get All Stores 
router.get('/getAllStores',storeController.getAllStores);

//Get Store by storeId
router.get('/getStoreById',storeController.getStoreById);

module.exports = router;