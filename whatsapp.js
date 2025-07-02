// whatsapp.js
import twilio from 'twilio';
import config from './config.js';

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

export async function sendWhatsAppMessage(customer) {
  const messageBody = 
    `✅ New Registration:\nName: ${customer.name}\nEmail: ${customer.email}\nPhone: +91${customer.phone}`;
  try {
    const msg = await client.messages.create({
      from: config.whatsapp.from,
      to: config.whatsapp.to,
      body: messageBody
    });
    console.log('WhatsApp message sent:', msg.sid);
  } catch (error) {
    console.error('Error sending WhatsApp:', error);
  }
}
