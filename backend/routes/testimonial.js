const express = require('express');
const {testimonialController} = require('../controllers');
const {authenticate} = require('../middleware/apiAuthentication');
const router = express.Router();

//Add a testimonial
router.post('/addTestimonial',authenticate,testimonialController.addTestimonial);


//Get Testimonials of store
router.get('/getTestimonial/:storeId',testimonialController.getTestimonials);

module.exports = router