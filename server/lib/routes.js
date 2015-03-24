
/**
 * Module dependencies.
 */

var User = require('./user');

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
