// Import the necessary modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
