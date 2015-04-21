
/**
 * This is the factor for the sockets sub-app.
 */

/**
 * Module dependencies.
 */

var sockets = require('./sockets.js');
var socket = require('koa-socket');
var koa = require('koa');

/**
 * Expose a `factory` that returns a Koa app.
 */

module.exports = factory;

/**
 * Create a Koa app for the API with `options`.
 */

function factory(options) {
  var app = koa();

  /**
   * Configure websockets.
   */

  socket.start(app);
  socket.on('connection', sockets.connection);
  socket.on('event', function(packet) {
    console.log('Socket received packet\n', packet);
  });
  socket.on('message', function(packet) {
    app.io.emit('message', packet);
  });

  /**
   * Return `app`.
   */

  return app.server;
}

