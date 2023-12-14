const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})
const cartModel = mongoose.model('cart',cartSchema);

module.exports = cartModel;