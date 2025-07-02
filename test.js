import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.verify.services(process.env.TWILIO_SERVICE_SID)
  .verifications
  .create({ to: '+919637159812', channel: 'sms' })
  .then(verification => console.log('Verification sent:', verification.sid))
  .catch(console.error);
