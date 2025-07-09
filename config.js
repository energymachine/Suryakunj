// config.js
import dotenv from 'dotenv';
dotenv.config();

export default {
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    serviceSid: process.env.TWILIO_SERVICE_SID // optional if using Twilio Verify
  },
  whatsapp: {
    to: 'whatsapp:+919923141800',  // owner's WhatsApp number
    from: 'whatsapp:+14155238886'  // Twilio sandbox number (change after setup)
  },
  db: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customerdb'
  }
};
