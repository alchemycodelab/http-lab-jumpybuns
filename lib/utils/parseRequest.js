module.exports = rawRequest => {

    

  const [method, path] = rawRequest.split(' ');
  const [, body] = rawRequest.split('\r\n\r\n');

  return { method, path, body };

};
