import express from 'express';
import pool from '../db.js';
import { authenticateToken } from '../middleware/authentication.js';

const router = express.Router();

// Get all shipping entries
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shipping');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get shipping info for a specific email
router.get('/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM shipping WHERE email = $1',
      [email]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Shipping info not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new shipping entry
router.post('/', authenticateToken, async (req, res) => {
  const { email, address, postalcode, country } = req.body;
  try {
    const insert = await pool.query(
      'INSERT INTO shipping (email, address, postalcode, country) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, address, postalcode, country]
    );
    res.status(201).json({ message: 'Shipping info added', shipping: insert.rows[0] });
  } catch (err) {
    if (err.code === '23505') {
      res.status(409).json({ error: 'Shipping info for this email already exists' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Update existing shipping info
router.put('/', authenticateToken, async (req, res) => {
  const { email, address, postalcode, country } = req.body;
  try {
    const update = await pool.query(
      'UPDATE shipping SET address = $1, postalcode = $2, country = $3 WHERE email = $4 RETURNING *',
      [address, postalcode, country, email]
    );
    if (update.rows.length === 0) {
      return res.status(404).json({ error: 'Shipping info not found' });
    }
    res.json({ message: 'Shipping info updated', shipping: update.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete shipping info by email
router.delete('/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  try {
    const deleted = await pool.query('DELETE FROM shipping WHERE email = $1 RETURNING *', [email]);
    if (deleted.rows.length === 0) {
      return res.status(404).json({ error: 'Shipping info not found' });
    }
    res.json({ message: 'Shipping info deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
