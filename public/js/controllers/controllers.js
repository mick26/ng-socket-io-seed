'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
      console.log("DATA= "+JSON.stringify(data));   //TEST
    });
  })

  .controller('MyCtrl1', function ($scope, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
      console.log("DATA time= "+JSON.stringify(data));   //TEST
    });
  })

  .controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
