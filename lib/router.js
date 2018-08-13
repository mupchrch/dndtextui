const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const config = require('./config/main');

/**
 * Initializes the Express routes.
 * @param  {Express} app The Express app.
 */
module.exports = function (app) {
  app.use(express.static('public'));

  app.use('/api', proxy({
    target: 'http://localhost:' + config.apiPort,
    pathRewrite: (path, req) => {
      return path.replace('/api', '');
    },
    onProxyRes: (proxyRes, req, res) => {
      if (req.path === '/callback') {
        // redirect to the post-login screen
        proxyRes.statusCode = 302;
        proxyRes.headers['location'] = '/dnd';
      }
    }
  }));

  // error middleware
  app.use((err, req, res, next) => {
    const status = err.status || 500;

    return res.status(status).send({ 'error': 'Something went wrong.' });
  });

  // Handles all routes so you do not get a not found error
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  })
}
