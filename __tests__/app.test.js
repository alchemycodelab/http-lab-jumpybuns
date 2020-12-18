const request = require('supertest');
const server = require('../lib/app');

describe('app routes', () => {
  it('GET status code 200', async() => {
    const response = await request(server)
      .get('/');
    
    expect(response.body).toEqual('hi');
  });
  it('responds with echo', async() => {
    const response = await request(server)
      .post('/echo')
      .send('echo');

    expect(response.text).toEqual('echo');
  });

  it('responds wtih red', async() => {
    const response = await request(server)

      .get('/red');
    
    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('responds with blue', async() => {
    const response = await request(server)
      .get('/blue');

    expect(response.text).toEqual('<hi>blue</hi>');
  });

  it('responds with green', async() => {
    const response = await request(server)
      .get('/green');


    expect(response.text).toEqual('<h1>green</h1>');
  });

});
