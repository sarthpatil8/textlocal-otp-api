const axios = require('axios');
require('dotenv').config();


const tlClient = axios.create({
    baseURL: 'https://api.textlocal.in/',
    params: {
        apiKey: process.env.API_KEY, // Replace with your TextLocal API key
        sender: process.env.SENDER_ID // Replace with your 6-character sender ID
    }
});

const sendOTP = (phoneNumber, otp) => {
    const message = `<Pre approved template from textlocal + <otp> >`; //Get tenplates from https://api.textlocal.in/
    const params = new URLSearchParams();
    params.append('numbers', phoneNumber);
    params.append('message', message);

    return tlClient.post('/send', params);
};
module.exports = { sendOTP };


