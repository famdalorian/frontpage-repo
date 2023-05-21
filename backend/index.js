const express = require('express');
const app = express();
const port = 3000; // Choose a port for your server

// Middleware
app.use(express.json()); // Enable JSON body parsing

// Routes
app.use('/api/users', require('./routes/users')); // Example route for user data

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
