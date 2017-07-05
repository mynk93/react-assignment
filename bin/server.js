require('babel/register');

var https = fs = require('fs'),
	path = require('path'),
	port = Number( process.env.PORT || 5000 );

const server = require('../server'),
      config = require('../config');

server.listen(port, function() {
	console.log('Express server listening on port: ' + port);
});
