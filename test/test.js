
/**
 * Module dependencies.
 */

var io = require('socket.io-client');
var should = require('should');

/**
 * Constants.
 */

const socketUrl = 'http://localhost:3000';
const opts = {
  transports: ['websocket'],
  'force new connection': true
};

/**
 * Server side socket activity.
 */

describe('Matching pool server', function() {

  /**
   * Server should broadcast new user event.
   */

  it('Should broadcast new user once she connects', function(done) {
    var client = io.connect(socketUrl, opts);
    client.on('connect', function(data) {
      console.log(data);
      client.emit('connection name', 'hello');
      client.disconnect();
      done();
    });
  });

  it('Should broadcast new user to users in that room', function(done) {
    done();
  });

  it('Should broadcast match upon receiving two likes', function(done) {
    done();
  });

});

/**
 * Client side socket activity.
 */

describe('Matching client', function() {

  it('Should emit connection event upon connection', function(done) {
    done();
  });

  it('Should emit a like if she swipes right', function(done) {
    done();
  });

  it('Should emit a pass if she swipes left', function(done) {
    done();
  });

});
