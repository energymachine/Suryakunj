// server.js
import express from 'express';
import pg from 'pg';
const pool = new pg.Pool(config.db);
export default pool;
import { sendOTP, verifyOTP } from './otp.js';
import { sendWhatsAppMessage } from './whatsapp.js';
import config from './config.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend
app.use(express.static(path.join(__dirname, '../')));

// Parse JSON bodies
app.use(express.json());

// Connect to DB
const db = await mysql.createConnection(config.db);

// Send OTP endpoint
app.post('/api/send-otp', async (req, res) => {
  const { phone } = req.body;
  try {
    await sendOTP(phone);
    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP in /api/send-otp:', error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }

  
});

// Verify OTP and register
app.post('/api/register', async (req, res) => {
  const { name, email, phone, otp } = req.body;
  try {
    const verified = await verifyOTP(phone, otp);
    if (!verified) return res.status(400).json({ success: false, message: 'Invalid OTP' });

    // Store in DB
    await db.execute(
      'INSERT INTO customers (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );

    // Send to WhatsApp
    await sendWhatsAppMessage({ name, email, phone });

    res.json({ success: true, message: 'Registered successfully' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
