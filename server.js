const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Send the 'index.html' file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 80; // Use port 80 for HTTP
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
