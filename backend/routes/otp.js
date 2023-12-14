const express = require('express');
const { otpController } = require('../controllers');
const router = express.Router();

//API to send OTP to Phone Number
router.post('/sendPhoneOTP',otpController.sendPhoneOtp);

//API to verify Phone OTP
router.post('/verifyPhone',otpController.verifyPhoneOtp);

//API to send OTP to Mail
router.post('/sendMailOTP',otpController.sendMailOtp);

//API to verify Mail OTP
router.post('/verifyMailOTP',otpController.verifyEmailOtp);

module.exports=router;