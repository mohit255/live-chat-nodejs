const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


io.on('connection', (socket) => {
console.log("user connected");
  socket.on('new_message', (data) => {
    console.log(data);
		socket.broadcast.emit('new message', {"message":data.message,"from":data.from});
	
  });

});
