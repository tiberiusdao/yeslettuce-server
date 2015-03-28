
/**
 * Module dependencies.
 */

var render = require('./render');
var User = require('./user');

/**
 * Serve static page for testing.
 */

exports.index = function *() {
  // this.body = yield render('index');
  this.body = '';
};

/**
 * Register user.
 *
 * Return object success.
 */

exports.register = function *() {
  var load = this.request.body;
  // upsert user.
  // should also ask user to auth with uber.
  return this.body = '';
};

/**
 * Set user settings.
 *
 * Return object success.
 */

exports.settings = function *(userId) {
  var load = this.request.body;
  // save to mongo.
  return this.body = '';
};

/**
 * Set user date preferences.
 *
 * Returns socket room name.
 */

exports.date = function *(userId) {
  var load = this.request.body;
  // return people who signed in last 5min filtered by pref?
  // redis? mongo?
  // on client side, need to add user to socket room.
  // return this.body = socket room name
  return this.body = '';
};
