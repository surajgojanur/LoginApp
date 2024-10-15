const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.urlencoded({ extended: false })); // Parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (CSS)
app.set('view engine', 'ejs'); // Set EJS as template engine

// Routes
app.use('/', authRoutes); // Use routes defined in authRoutes.js

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
