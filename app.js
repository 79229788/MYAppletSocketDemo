const http = require('http');
const server = http.createServer().listen(8888);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('hi', function(message) {
    console.log(message);
    socket.emit('say', 'hello too!');
  })
});

