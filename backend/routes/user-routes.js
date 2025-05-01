import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import { authenticateToken } from '../middleware/authentication.js';

const router = express.Router();

// Get all users
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await pool.query('SELECT name, email, phone_number FROM "User"');
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single user by email
router.get('/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  try {
    const user = await pool.query(
      'SELECT name, email, phone_number FROM "User" WHERE email = $1',
      [email]
    );
    if (user.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user details (excluding password)
router.put('/', authenticateToken, async (req, res) => {
  const { email, name, phone_number, password } = req.body;
  try {
    const updated = await pool.query(
      'UPDATE "User" SET name = $1, phone_number = $2, password = $4 WHERE email = $3 RETURNING *',
      [name, phone_number, email, password]
    );
    if (updated.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated successfully', user: updated.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new user
router.post('/', async (req, res) => {
  const { name, email, phone_number, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO "User" (name, email, phone_number, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone_number, hashedPassword]
    );
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (err) {
    if (err.code === '23505') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

// Delete user by email
router.delete('/:email', authenticateToken, async (req, res) => {
  const { email } = req.params;
  try {
    const deleted = await pool.query('DELETE FROM "User" WHERE email = $1 RETURNING *', [email]);
    if (deleted.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
