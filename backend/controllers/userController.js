 const User = require('../models/user');

exports.getUser = async(req,res,next) => {
    const {userId} = req.params;
    try{
       const user = await User.findOne({userId});
       if(!user){
        return res.status(401).send({
            message:"User Not Found"
        })
       }
       return res.status(200).send({data:user});
    }
    catch{
     next();
    }
}