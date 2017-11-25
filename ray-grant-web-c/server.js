// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// mongoose

// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect('70.58.110.157:27017/reference');

// Get our API routes
// const appRoutes = require('./server/routes/app');
// const userRoutes = require('./server/routes/user');
// const bookRoutes = require('./server/routes/books');
// const referenceRoutes = require('./server/routes/references');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes

// app.use('/references', referenceRoutes);
// app.use('/messages', bookRoutes);
// app.use('/user', userRoutes);
// app.use('/', appRoutes);




app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});


// Catch all other routes and return the index file
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8300';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
