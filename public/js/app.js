'use strict';

/**
 * Module - main app module 
 */

angular.module('myApp', ['ngRoute','myApp.controllers', 'myApp.filters',
  'myApp.services','myApp.directives', 'btford.socket-io' ])

.config(function ($routeProvider, $locationProvider) {
  
  $routeProvider

    .when('/view1', {
      templateUrl: 'views/view1.tpl.html',
      controller: 'MyCtrl1'
    })

    .when('/view2', {
      templateUrl: 'views/view2.tpl.html',
      controller: 'MyCtrl2'
    })

   .otherwise({
     redirectTo: '/view1'
   });

  $locationProvider.html5Mode(false);

});
