# TextLocal OTP API


[![GitHub License](https://img.shields.io/github/license/sarthpatil8/textlocal-otp-api)](https://github.com/sarthpatil8/textlocal-otp-api/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/sarthpatil8/textlocal-otp-api)](https://github.com/sarthpatil8/textlocal-otp-api/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/sarthpatil8/textlocal-otp-api)](https://github.com/sarthpatil8/textlocal-otp-api/issues)

# Project Description
A simple API wrapper for sending One-Time Passwords (OTPs) using TextLocal's SMS services.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [License](#license)

## Installation

To use this API wrapper, you'll need to install the required dependencies. Run the following command in your terminal:
npm install


## Usage

To send an OTP using this API wrapper, simply call the `sendOTP` function and pass the recipient's phone number and the OTP as arguments.

## Environment Variables

This API wrapper uses the following environment variables:

- **API_KEY**: Your TextLocal API key
- **SENDER_ID**: Your 6-character sender ID

Make sure to replace these variables with your actual credentials in the `.env` file.



## API Documentation

### `sendOTP(phoneNumber, otp)`

Sends an OTP to the specified phone number.

#### Parameters:
- **phoneNumber**: The recipient's phone number (string)
- **otp**: The OTP to be sent (string)

#### Returns:
A promise that resolves with the API response data.

## License

This API wrapper is released under the MIT License. See the [LICENSE](LICENSE) file for details.
