
/**
 * Module dependencies.
 */

var User = require('../lib/user');
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


/**
 * When a user connects, the user should receive a stack of cards that
 * matches her criteria.
 *
 * @card:
 * - name
 * - distance
 * - bio
 * - photos [..]
 * - availableUntil (date)
 */

/**
 * When a user swipes right or swipes left, the server should receive
 * that information and broadcast is to the other person.
 *
 * Receive:
 * - fbId
 * - like: `true` (or `false`)
 *
 * Emit:
 */