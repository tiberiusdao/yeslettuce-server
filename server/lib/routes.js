
/**
 * Module dependencies.
 */

var render = require('./render');
var User = require('./user');

/**
 * Register user.
 *
 * Return object success.
 */

exports.register = function *() {
  var load = this.request.body;
  return this.body = yield User.upsert(load.user);
};

/**
 * Set user settings.
 *
 * Return object success.
 */

exports.settings = function *(fbId) {
  var load = this.request.body;
  return this.body = yield User.settings(fbId, load.settings);
};

/**
 * Set user date preferences.
 *
 * Returns socket room name.
 */

exports.date = function *(fbId) {
  var load = this.request.body;
  // return the name of socket io to join
  return this.body = '';
};
