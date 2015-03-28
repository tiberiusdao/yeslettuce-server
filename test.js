var io = require('socket.io-client');

const socketUrl = 'http://localhost:3000/socket.io';
const opts = {
  transports: ['websocket'],
  'force new connection': true
};

var client = io(socketUrl);

client.on('connect', function(data) {
  console.log(data);
});