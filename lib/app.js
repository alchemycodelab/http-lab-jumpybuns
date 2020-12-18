const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi', status: '200', contentType: 'text/plain' }));
    }
    if(request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: `${request.body}`, status: '200', contentType: 'text/plain' }));
      console.log(request.text);
    }
    if(request.method === 'GET' && request.path === '/red') {
      socket.end(createResponse({ body: '<h1>red</h1>', status: '200', contentType: 'text/plain' }));

    }
    if(request.method === 'GET' && request.path === '/green') {
      socket.end(createResponse({ body: '<h1>green</h1>', status: '200', contentType: 'text/plain' }));

    }
    if(request.method === 'GET' && request.path === '/blue') {
      socket.end(createResponse({ body: '<h1>blue</h1>', status: '200', contentType: 'text/plain' }));

    }
  });
});

module.exports = app;
