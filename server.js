const express = require('express');
const path = require('path');

const app = express();

// Serve static files (like CSS, JS, images) from a directory named 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Send an HTML file or a response for the root URL
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    // Or res.send('Hello, World!');
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
