/* ========================================================== 

Michael Cullen 2014
server.js

Working - (Tá se ag obair)

Ref.
https://github.com/btford/angular-socket-io-seed
https://github.com/btford/angular-socket-io
http://socket.io/#how-to-use
============================================================ */


/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var errorHandler = require('errorHandler');
var colours = require('colors');
var socketio = require('socket.io');
/* ========================================================== 
Internal App Modules/Packages Required
============================================================ */
//var routes = require('./routes');
//var api = require('./routes/api');

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = module.exports = express();

/* ========================================================== 
Create server object & pass Express into it
============================================================ */
var server = http.createServer(app);

/* ========================================================== 
Make socket.io listen to server object
============================================================ */
var io = socketio.listen(server);


/* ========================================================== 
Set the Port
============================================================ */
app.set('port', process.env.PORT || 3300);

/* ========================================================== 
Use Middleware
============================================================ */
app.use(logger('dev'));         //log every request to the console in dev
app.use(bodyParser.json());     //parse application/json

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
  extended: true 
}))

app.use(methodOverride());

/* ========================================================== 
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public')); 


// development only
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */


// Socket.io Communication
io.sockets.on('connection', require('./server/socket/socket.js'));

/**
 * Start Server
 */
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' .green + app.get('port'));
});
