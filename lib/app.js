const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  console.log('go on and surf your sites then');
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.url === '/'){
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});



module.exports = app;
