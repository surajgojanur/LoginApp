const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Redirect root URL to /login
router.get('/', (req, res) => {
    res.redirect('/login');
});

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
            res.send('Login Successful');
        } else {
            res.send('Invalid Credentials');
        }
    });
});

module.exports = router;
