const express = require('express');
const app = express();
const http = require('http').Server(app);
const logger = require('morgan');
const router = require('./router');
const config = require('./config/main');

// Configure Express
app.use(logger('dev'));

// Import routes to be served
router(app);

http.listen(config.port, function() {
  console.log('listening on *:' + config.port);
});
