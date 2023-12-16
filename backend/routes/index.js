const express = require("express");
const router = express.Router();
const authRoutes = require('./auth');
const otpRoutes = require('./otp');
const userRoutes =require('./user');
const storeRoutes = require('./store');
const productRoutes = require('./product');
const cartRoutes = require('./cart');
const likeRoutes = require('./like');
const followRoutes = require('./follow');
const testimonialRoutes = require('./testimonial');

// All Routes here

router.use('/auth', authRoutes);
router.use('/otp',otpRoutes);
router.use('/user',userRoutes);
router.use('/store',storeRoutes);
router.use('/product',productRoutes);
router.use('/cart',cartRoutes);
router.use('/like',likeRoutes);
router.use('/follow',followRoutes);
router.use('/testimonial',testimonialRoutes);

module.exports = router;
