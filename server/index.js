
/**
 * This is the top-level factory for the server. It is responsible for setting
 * up global middleware, and accepts options that are passed via CLI.
 *
 * @see bin/app
 */

/**
 * Module dependencies.
 */

var parser = require('koa-bodyparser');
var logger = require('koa-logger');
var sockets = require('./sockets');
var serve = require('koa-static');
var mount = require('koa-mount');
var api = require('./api');
var koa = require('koa');

/**
 * Expose a factory for generatoring a Koa app.
 */

module.exports = factory;

/**
 * Generate a Koa app from a set of `options`.
 */

function factory(options) {
  var app = koa();

  /**
   * Use logger.
   */

   app.use(logger());

  /**
   * Setup static directory.
   */

  app.use(serve('public'));

  /**
   * Use body parser.
   */

  app.use(parser());

  /**
   * Mount the sub-apps.
   */

  app.use(mount('/api', api(options)));
  app.use(mount('/s', sockets(options)));

  /**
   * Return `app`.
   */

  return app;
}
