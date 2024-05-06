const net = require('net');

const server = net.createServer((socket) => {
  console.log('client connected');
  
  socket.on('data', (data) => {
    console.log('data received: ' + data);
    socket.write('Echo: ' + data);
  });

  socket.on('end', () => {
    console.log('client disconnected');
  });
});

server.listen(9999, () => {
  console.log('Server listening on port 9999');
});
