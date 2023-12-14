const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    storeId:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    size:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    descreption:{
        type:String,
        require:true
    },
    isSold:{
        type:Boolean,
        require:true
    }
})
const product = mongoose.model('product',productSchema);

module.exports = product;