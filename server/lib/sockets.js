
/**
 * Module dependencies.
 */

var User = require('./user');
// need a data store for matches.. redis?

/**
 * On match, emit event.
 */

exports.connection = function(socket) {

  socket.emit('connected', {});

  // join a room based on client preference.
  // - ice cream, beer, or coffee.
  // - age limitations

  // return users in the room that fit the criteria

  // packet.userId
  // get the user from mongo
  // then find users from mongo that fit that user's filters/preferences
  // remove the users that don't have that user's in their preferences (reverse)
  // return the remaining array of users

  // things to do:
  // - get packet, check to see if match
  // - if match, then do stuff! call uber.
  // - if no match, ignore
};
