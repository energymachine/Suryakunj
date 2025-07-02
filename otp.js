// otp.js
import twilio from 'twilio';
import config from './config.js';

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

export async function sendOTP(phone) {
  try {
    const verification = await client.verify
      .services(config.twilio.serviceSid)
      .verifications.create({
        to: `+91${phone}`,
        channel: 'sms'
      });
    return verification;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

export async function verifyOTP(phone, code) {
  try {
    const verificationCheck = await client.verify
      .services(config.twilio.serviceSid)
      .verificationChecks.create({
        to: `+91${phone}`,
        code
      });
    return verificationCheck.status === 'approved';
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return false;
  }
}
