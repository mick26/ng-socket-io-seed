'use strict';

/**
 * Module - Main App module
 */

angular.module('myApp', ['ngRoute' , 'btford.socket-io', 'myApp.controllers', 'myApp.directives', 'myApp.filters', 'myApp.services'] )



.config(function ($routeProvider, $locationProvider) {
  
  $routeProvider

    .when('/view1', {
      templateUrl: 'views/view1.tpl.html'
     // controller: 'MyCtrl1'
    })

    .when('/view2', {
      templateUrl: 'views/view2.tpl.html'
      //controller: 'MyCtrl2'
    })

   .otherwise({
     redirectTo: '/view1'
   });

  $locationProvider.html5Mode(false);

});
/*
We can call the various setter functions belonging to the socket.io library module in the config() method.
Here we SET the connection URL for Socket.IO. 
*/
// .config(function ($socketProvider) {
//     $socketProvider.setConnectionUrl('http://localhost:8800');
// });
