const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./routes/usersRouter.js');
const movesRouter = require("./routes/movesRouter.js")

// Require the database
require('./db.js');

const server = express();

server.name = 'API';

// Settings
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Main routes
server.use('/users', usersRouter);
server.use('/moves', movesRouter);

// Error catching endware
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;