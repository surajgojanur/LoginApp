const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Import the auth routes
const authRoutes = require('./routes/authRoutes');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Use auth routes
app.use('/', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
