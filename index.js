const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 4000;
const uri = 'mongodb+srv://famdalorian:' + encodeURIComponent('Goosebumps1998') + '@xxisspcluster.wwb1wwj.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected to the database');
    const db = client.db('XXisspCluster'); // Replace with your database name

    // Routes
    app.get('/', (req, res) => {
      res.send('Status: Working');
    });

    // Add more routes and database operations here

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
