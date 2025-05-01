// routes/checkoutHistory.js

import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/authentication.js';

const router = express.Router();

// Get all checkout records (optional: admin view)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM checkout_history ORDER BY checkout_date_and_time DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get checkout history for a specific email
router.get('/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM checkout_history WHERE email = $1 ORDER BY checkout_date_and_time DESC',
      [email]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Insert new checkout entry
router.post('/', authenticateToken, async (req, res) => {
  const { email, book_isbn, total_price, qty, checkout_date_and_time } = req.body;
  try {
    const insert = await pool.query(
      `INSERT INTO checkout_history (email, book_isbn, total_price, qty, checkout_date_and_time)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [email, book_isbn, total_price, qty, checkout_date_and_time]
    );
    res.status(201).json({ message: 'Checkout recorded', data: insert.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
