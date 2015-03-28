
/**
 * Module dependencies.
 */

var app = require('./server/server');

/**
 * Start server.
 */

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('listening on port ' + PORT);
