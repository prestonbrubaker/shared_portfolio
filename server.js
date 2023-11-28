const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Check the host header to respond to 'markoviandevelopments.com' only
app.use((req, res, next) => {
    if (req.hostname === 'markoviandevelopments.com') {
        next();
    } else {
        res.status(404).send('Not Found');
    }
});

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Send the 'index.html' file for 'markoviandevelopments.com'
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server running for markoviandevelopments.com on port ${PORT}`);
});
