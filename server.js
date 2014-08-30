/* =================================================================================

Michael Cullen
server.js

2014
Working - (Tá se ag obair)


Ref.
http://code.tutsplus.com/tutorials/more-responsive-single-page-applications-with-angularjs-socketio-creating-the-library--cms-21738

http://socket.io/blog/introducing-socket-io-1-0/

https://gist.github.com/rosterloh/de06827bafe3c4a8454e
http://briantford.com/blog/angular-socket-io
http://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/#disqus_thread
http://www.williammora.com/2013/03/nodejs-tutorial-building-chatroom-with.html
http://stackoverflow.com/questions/23281594/configuring-express-4-0-routes-with-socket-io
================================================================================= */

'use strict';

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
var socket = require('./server/socket.js');

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
app.set('port', process.env.PORT || 8800);

/* ==========================================================
Use Middleware
============================================================ */
app.use(logger('dev')); //log every request to the console in dev
app.use(bodyParser.json()); //parse application/json
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


/*
 Socket.io Communication
 Handle all incoming connections in the connection event listener of the io.sockets object
*/
io.sockets.on('connection', socket);

// Start server
//NOTE!! I had to replace app.listen with server.listen
server.listen(app.get('port'), function() {
  console.log("Express server listening on port %d in %s mode" .green, app.get('port'), app.settings.env);
});
