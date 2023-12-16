const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    userId:{
        require:true,
        type:String
    },
    storeId:{
        require : true,
        type:String
    },
    stars:{
        require:true,
        type:Number
    },
    detail:{
        require:true,
        type:String
    }
})

const testimonal = mongoose.model('testimonial',testimonialSchema);
module.exports = testimonal;