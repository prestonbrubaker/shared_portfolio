const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

// Serve static files (like CSS, JS, images) from a directory named 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 443;

// SSL certificate paths
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/markoviandevelopments.com/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/markoviandevelopments.com/cert.pem', 'utf8'),
    ca: fs.readFileSync('/etc/letsencrypt/live/markoviandevelopments.com/chain.pem', 'utf8')
};

https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running for markoviandevelopments.com on port ${PORT}`);
});
