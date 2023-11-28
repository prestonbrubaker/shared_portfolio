const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// SSL certificate paths
const privateKey = fs.readFileSync('/etc/letsencrypt/live/markoviandevelopments.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/markoviandevelopments.com/fullchain.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Creating HTTPS server
const httpsServer = https.createServer(credentials, app);

const PORT = 443;
httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});
