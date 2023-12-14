const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    storeName:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    address:{
        country:{
            type:String,
            require:true
        },
        state:{
            type:String,
            require:true
        },
        city:{
            type:String,
            require:true
        },
        postalCode:{
            type:String,
            require:true
        },
        street:{
            type:String,
            require:true
        },
        houseNumber:{
            type:String,
            require:true
        }
    },
    accountNumber:{
        type:String,
        require:true
    },
    ifsc:{
        type:String,
        require:true
    },
    descreption:{
        type:String,
        require:true
    },
    followers:{
        type:Number,
        default:0
    },
    numberOfproducts:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    social:{
      facebook:{
        type:String,
        require:true,
        default:null
      },
      instagram:{
        type:String,
        require:true,
        default:null
      },
      twitter:{
        type:String,
        require:true,
        default:null
      }
    }
    
})

const Store = mongoose.model('store',storeSchema);

module.exports = Store;