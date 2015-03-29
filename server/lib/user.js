
/**
 * Module dependencies.
 */

var db = require('./db');
var merge = require('merge');
var wrap = require('co-monk');
var User = wrap(db.get('user'));

/**
 * Expose `User`.
 */

module.exports = User;

/**
 * Upsert user.
 */

User.upsert = function *(user) {
  var exists = yield this.findOne({ fbId: user.fbId });
  if (!exists) return yield this.insert(user);
  return yield this.updateById(exists._id, user);
}

/**
 * Settings.
 */

User.settings = function *(fbId, settings) {
  var user = yield this.findOne({ fbId: fbId });
  user = merge(user, settings);
  return yield this.updateById(user._id, user);
};
