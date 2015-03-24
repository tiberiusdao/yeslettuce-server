
/**
 * Module dependencies.
 */

var User = require('./user');
// need a data store for matches.. redis?

/**
 * On match, emit event.
 */

exports.connection = function *(packet) {
  // join a room based on client preference.
  // - ice cream, beer, or coffee.
  // - age limitations

  // things to do:
  // - get packet, check to see if match
  // - if match, then do stuff! call uber.
  // - if no match, ignore
};
