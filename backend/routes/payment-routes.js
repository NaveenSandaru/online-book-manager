import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import { authenticateToken } from '../middleware/authentication.js';

const router = express.Router();

router.get('/', /*authenticateToken,*/ async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM counsellors');
        res.json(response.rows);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.get('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM counsellors WHERE id = $1', [req.params.id]);
        res.json(response.rows);
    } catch (err) {
        res.status(500).json(er.message);
    }
});

router.put('/', /*authenticateToken,*/ async (req, res) => {
    try {
        await pool.query('UPDATE counsellors SET password = $1, name = $2, email = $3, nic = $4, phone = $5 WHERE id = $6', [req.body.password, req.body.name, req.body.email, req.body.nic, req.body.phone, req.body.id]);
        res.json(true);
    } catch (error) {
        res.json(false);
    }
});

router.post('/', /*authenticateToken,*/ async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await pool.query('INSERT INTO counsellors (id, password, name, email, nic, phone) VALUES ($1,$2,$3,$4,$5,$6)',[req.body.id, hashedPassword, req.body.name, req.body.email, req.body.nic, req.body.phone]);
        res.json(true);
    } catch (error) {
        res.json(false);
    }
});

router.delete('/:id', /*authenticateToken,*/ async (req, res) => {
    try {
        await pool.query('DELETE FROM counsellors WHERE id = $1', [req.params.id]);
        res.json(true);
    } catch (error) {
        res.json(false);
    }
});

export default router;