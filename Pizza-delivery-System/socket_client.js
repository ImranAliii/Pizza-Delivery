const net = require('net');
const client = new net.Socket();

client.connect(9999, 'localhost', () => {
  console.log('Connected');
  client.write('Hello, server');
});

client.on('data', (data) => {
  console.log('Received: ' + data);
  client.destroy(); // kill client after server's response
});

client.on('close', () => {
  console.log('Connection closed');
});
