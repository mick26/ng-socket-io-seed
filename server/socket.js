/* =================================================================================

Socket.io Interactions are handled here


================================================================================= */

//export function for listening to the socket
module.exports = function (socket) {
  

/*
 * Serve content over a socket
 */

  socket.emit('send:name', {
    name: 'Mick'
  });

  setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);






  /*
  Now we will add a basic event listener in the callback above. 
  It will send the data received, back to the client using the socket.emit() method:
  */
  socket.on('echo', function (data) {
      socket.emit('echo', data);
  });
  //echo is the custom event name that we will use later.
  
  /*
  We will also use acknowledgments in our library. This feature allows you to pass a function 
  as the third parameter of the socket.emit() method. 
  This function can be called on the server to send some data back to the client:
  */
  socket.on('echo-ack', function (data, callback) {
      callback(data);
  });
  /*
    This allows you to respond to the client without requiring it to listen to any events 
    (which is useful if you want to just request some data from the server).  
    Now our test back-end is complete
  */  

};
