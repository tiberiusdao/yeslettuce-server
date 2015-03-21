
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
 * Returns recommendations array.
 */

exports.date = function *(userId) {
  var load = this.request.body;
  // return people who signed in last 5min filtered by pref?
  // redis? mongo?
  return this.body = '';
};

/**
 * Like or pass on another user.
 *
 * Returns match boolean.
 */

exports.like = function *(userId) {
  var load = this.request.body;
  // if matched, then send request to uber.
  // uber.call(user1);
  // uber.call(user2);
  // probably start websockets? in case someone cancels
  // or poll every 10 seconds
  // and throw that map in a webview.
  return this.body = '';
};
