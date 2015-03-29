
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
 * Update user.
 */

User.update = function *(fbId, props) {
  var user = yield this.findOne({ fbId: fbId });
  var mergedUser = merge(user, props);
  return yield this.updateById(user._id, mergedUser);
};
