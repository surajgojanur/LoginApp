const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login form submission
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], (err, result) => {
        if (err) throw err;

        if (result.rows.length > 0) {
            // If login is successful, redirect to the success page
            res.render('success', { username: username });
        } else {
            // If login fails, send an error message
            res.send('Invalid Credentials');
        }
    });
});

module.exports = router;
