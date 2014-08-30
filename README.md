# Angular Socket.IO Seed

Based on Brian Fords [Angular Socket-io Seed](https://github.com/btford/angular-socket-io-seed) and using [angular-socket-io module](https://github.com/btford/angular-socket-io) to provide a wrapper around the io() object given by socket.io to  the client. Parts were also taken from the [Tuts+ tutorial by Maciej Sopyło](http://code.tutsplus.com/tutorials/more-responsive-single-page-applications-with-angularjs-socketio-creating-the-library--cms-21738).


* No Jade just HTML
* All views rendered by Angular client
* Updated to Express version 4.x.x
* Updated to Socket.io V1.x


As Brian put it "Start an awesome app with AngularJS on the front, Socket.io + Express + Node on the back. This
project is an application skeleton for writing [AngularJS](http://angularjs.org/) apps that use
web sockets to add real-time functionality.

The seed app shows how to wire together Angular client-side components with Socket.io and Express
on the server."

Brians angular-socket-io module provides a wrapper around the io() object presented by socket.io to the client. The module handles interacting with socket.io on the client. The module exposes a socketFactory, which is an API for instantiating sockets that are integrated with Angular's digest cycle. 

Brians code uses the lower level [Provider service](https://docs.angularjs.org/guide/providers) because a provider service has a $get function to expose an API where configuration settings can be given to the provider service before the application starts (i.e. the socket.io io() object). When the application starts then the provider service creates a Factory service with configuration settings applied.


This socket.io module is then injected into the main App module as a dependancy. 
<pre>angular.module('myApp', ['btford.socket-io' ])</pre>

The socket Instance is created in js/services/services.js with:

<pre>
  .factory('socket_name', function (socketFactory) {
    return socketFactory();
  })
</pre>


Socket.io can be used with controllers by injecting it like:
<pre>  .controller('Ctrl', function ($scope, socket_name) {</pre>



### Running the app

- clone the repository 
- npm install 
- bower install
- node server.js
- localhost:3300