const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Use the routes defined in authRoutes.js
app.use('/', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
