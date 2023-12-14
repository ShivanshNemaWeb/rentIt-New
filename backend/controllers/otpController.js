const twilio = require('twilio');
const  User  = require('../models/user');
require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_NUMBER;
const nodemailer = require('nodemailer');

// Create a Twilio client
const client = twilio(accountSid, authToken);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
let otpMap = new Map();
let emailOtpMap = new Map();

//API to send OTP to Phone number
exports.sendPhoneOtp = async (req, res) => {
    const { phoneNumber } = req.body;

    // Generate a dynamic OTP
    const otp = generateRandom6DigitNumber();

    otpMap.set(phoneNumber, otp); // Store OTP in the map

    try {
        // Send SMS via Twilio
        await client.messages.create({
            to: phoneNumber,
            from: twilioPhoneNumber,
            body: `Your RentIt OTP is: ${otp}`,
        });

        res.json({
            message: 'OTP sent successfully',
        });
    } catch (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({
            error: 'Failed to send OTP',
        });
    }
};

//Vrify Otp
exports.verifyPhoneOtp = async (req, res) => {
    const { phoneNumber, otp } = req.body;

    const storedOtp = otpMap.get(phoneNumber);
    if (!storedOtp || storedOtp!==otp) {
        return res.status(401).json({
            error: 'Invalid OTP',
        });    
    }

    try {
        const user = await User.findOne({phoneNumber});
        if(!user){
            return res.json({message:"Invalid Phone Number"});
        }        
        user.phoneVerified=true;
        await user.save();
        return res.status(200).json({message:"User Verified Successfully"});

    } catch (err) {
        console.error('Verification Error:', err);
        res.status(401).json({
            error: err || 'Invalid OTP',
        });
    }
};

// API to send OTP to Email
exports.sendMailOtp = async (req, res) => {
    const { email } = req.body;
  
    // Generate a dynamic OTP
    const otp = generateRandom6DigitNumber();
  
    emailOtpMap.set(email, otp); // Store OTP in the map
  
    try {
      // Send email via Nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'RentIt Email Verification OTP',
        text: `Your RentIt OTP is: ${otp}`,
      });
  
      res.json({
        message: 'OTP sent successfully to email',
      });
    } catch (error) {
      console.error('Error sending email OTP:', error);
      res.status(500).json({
        error: 'Failed to send email OTP',
      });
    }
  };
  
  // Verify Email OTP
  exports.verifyEmailOtp = async (req, res) => {
    const { email, otp } = req.body;
  
    const storedOtp = emailOtpMap.get(email);
    if (!storedOtp || storedOtp !== otp) {
      return res.status(401).json({
        error: 'Invalid OTP',
      });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: 'Invalid Email Address' });
      }
      user.emailVerified = true;
      await user.save();
      return res.status(200).json({ message: 'User Email Verified Successfully' });
    } catch (err) {
      console.error('Email Verification Error:', err);
      res.status(401).json({
        error: err || 'Invalid OTP',
      });
    }
  };

  
//Helper function to generate otp
const generateRandom6DigitNumber=()=>{
    const min = 100000; // Minimum value (inclusive)
    const max = 999999; // Maximum value (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}