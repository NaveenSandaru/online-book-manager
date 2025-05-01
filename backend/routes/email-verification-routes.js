// routes/emailVerifications.js

import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Get verification code for a specific email
router.get('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM email_verifications WHERE email = $1',
      [email]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Code not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create or update verification code
router.post('/', async (req, res) => {
  const { email, code } = req.body;
  try {
    const upsert = await pool.query(
      `INSERT INTO email_verifications (email, code)
       VALUES ($1, $2)
       ON CONFLICT (email)
       DO UPDATE SET code = EXCLUDED.code
       RETURNING *`,
      [email, code]
    );
    res.status(201).json({ message: 'Code set', data: upsert.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete verification code for email
router.delete('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const deleted = await pool.query(
      'DELETE FROM email_verifications WHERE email = $1 RETURNING *',
      [email]
    );
    if (deleted.rows.length === 0) return res.status(404).json({ error: 'Code not found' });
    res.json({ message: 'Code deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
