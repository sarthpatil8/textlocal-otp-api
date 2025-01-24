const smsClient = require('./sendOTP');
const randomOtp = require('./random-otp');

const phoneNumber = '<Mobile-Number>'; // Replace with the recipient's phone number
const otp = randomOtp; // Replace with your OTP

smsClient.sendOTP(phoneNumber, otp)
    .then(response => {
        console.log('OTP sent successfully:', response.data);
    })
    .catch(error => {
        console.error('Error sending OTP:', error);
    });


