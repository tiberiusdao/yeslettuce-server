
/**
 * This is the factor for the API sub-app.
 */

/**
 * Module dependencies.
 */

var route = require('koa-route');
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
   * Configure routes.
   */

  var routes = require('./routes.js');
  app.use(route.post('/user/register', routes.register));
  app.use(route.post('/user/:userId/date', routes.date));
  app.use(route.post('/user/:userId/like', routes.like));
  app.use(route.post('/user/:userId/settings', routes.settings));

  /**
   * Return `app`.
   */

  return app;
}

