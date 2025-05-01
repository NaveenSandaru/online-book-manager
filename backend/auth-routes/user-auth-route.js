import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwTokens } from '../utils/jwt-helper.js';
import { authenticateToken } from '../middleware/authentication.js';

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password, checked } = req.body;
        const user = await pool.query(`SELECT * FROM user WHERE email = $1`, [email]);
        if (user.rows.length === 0) {
            res.json(false);
        }
        else {
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            if (!validPassword) {
                res.json(false);
            }
            else {
                if (checked) {
                    let tokens = jwTokens(user.rows[0].email, user.rows[0].name);
                    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, sameSite: "None", secure: true, maxAge: 14 * 24 * 60 * 60 * 1000});
                    res.json(true);
                }
                else {
                    let tokens = jwTokens(user.rows[0].id, user.rows[0].name, role);
                    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true, sameSite: "None", secure: true});
                    res.json(true);
                }

            }
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(401).json({ error: err.message });
    }
});

router.get('/refresh_token', (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.json(false);
        }
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (error, user) => {
            if (error) return res.status(403).json({ error: error.message });

            const { email, name } = user;
            let accessToken = jwt.sign({ email, name }, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15m' });

            res.json({ accessToken, email });
        });
    } catch (err) {
        console.error(err.message);
        return res.json(false);
    }
});

router.delete('/refresh_token', (req, res) => {
    try {
        res.clearCookie('refreshToken');
        return res.status(200).json({ message: 'Refresh token deleted' });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

export default router;