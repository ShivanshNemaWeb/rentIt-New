const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    hasStore:{
        type:Boolean,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
    },
    address:{
        country:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        
        pinCode:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
    },
    countryCode:{
           type:String,
           required :true
    },
    password:{
        type:String,
        required:true
    },
    emailVerified:{
        type:Boolean,
        required:true
    },
    phoneVerified:{
        type:Boolean,
        required:true
    }
})
 const User = mongoose.model('user',userSchema);
 module.exports=User;