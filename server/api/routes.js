
/**
 * Module dependencies.
 */

var User = require('../lib/user');

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
 * Update user by `fbId`.
 *
 * Settings, preferences, photos, bio, etc.
 *
 * Return object success.
 */

exports.update = function *(fbId) {
  var load = this.request.body;
  return this.body = yield User.update(fbId, load.settings);
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
