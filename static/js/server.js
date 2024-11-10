// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002; // Adjust the port if necessary

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to ProBuddyHub!');
});

// Endpoint for the Forgot Password form
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Placeholder for actual email-sending logic
    if (email) {
        res.json({ message: `A reset link has been sent to ${email}.` });
    } else {
        res.status(400).json({ message: 'Invalid email address.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
