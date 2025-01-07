import assert from 'assert';
import request from 'supertest';
import server from './app.js';


describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(server).get('/');
    console.log(response.text);  
    assert.strictEqual(response.text, 'Hello World Pass');
  });
});

