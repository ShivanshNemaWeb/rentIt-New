const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
require('dotenv').config();

//Login API
exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: 'User Not Found' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
     
      const userId = user.userId;
      const hasStore = user.hasStore;

      const token = jwt.sign(
        { userId,hasStore},
        process.env.JWT_SECRET,
      );
      const response = {
        hasStore,
        token,
        userId
      };
      
      return res.status(200).json({data:response});
    } catch (error) {
      next(error);
    }
  };

//Register API
exports.register = async(req,res,next) => {
  const {email, password, phoneNumber, firstname, lastname, address,countryCode} = req.body;
  try{
    const user = await User.findOne({email:email});
    if(user){
      return res.status(200).json({message:"User already exist"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = generateUserId();

    const newUser = new User({
      userId,
      email,
      password:hashedPassword,
      phoneNumber,
      firstname,
      lastname,
      address,
      countryCode,
      emailVerified:false,
      phoneVerified:false,
      hasStore:false
    })

    await newUser.save();

   return res.status(200).send({user:newUser});

  }
  catch(error){
    next(error);
  }
}

// Helper function to generate a unique ID for the user
function generateUserId() {
  // Generate a random 8-character alphanumeric string
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      userId += chars[randomIndex];
  }
  return userId;
}