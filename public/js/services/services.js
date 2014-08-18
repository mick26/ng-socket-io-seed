'use strict';

/* Services */
angular.module('myApp.services', [])

// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).

  .factory('socket', function (socketFactory) {
    return socketFactory();
  })

  .value('version', '0.1');