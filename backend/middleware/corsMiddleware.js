const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: '*', // Update the origin to allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Accept', 'Content-Type', 'Connection', 'Authorization'],
  exposedHeaders: ['Content-Length', 'Authorization'],
  credentials: true,
};

module.exports = cors(corsOptions);
