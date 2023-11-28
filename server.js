const express = require('express');
const path = require('path');

const app = express();

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen on port 80 for HTTP
const PORT = 80;
app.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});
