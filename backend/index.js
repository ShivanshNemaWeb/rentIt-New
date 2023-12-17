const http = require('http');
const fs = require('fs');
const express = require('express');
const { connectDb } = require('./config/db');
const routes = require('./routes/index');
const corsMiddleware = require('./middleware/corsMiddleware');
require('dotenv').config();

const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 8000;

app.use(corsMiddleware);

// Parse incoming JSON
app.use(express.json());

// Set up routes
app.use('/', routes);

//Create server
const server = http.createServer(app);

// Connect to MongoDB
connectDb()
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    server.listen(port, () => {
      console.log(`Server running at http:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });