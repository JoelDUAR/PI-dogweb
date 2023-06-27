const request = require('supertest');
const app = require('../../src/app');


describe('Dog routes', () => {
  it("Debe responder con un 'status' 200 al hacer un req GET a '/dogs'", async () => {
    const response = await request(app).get("/dogs");
    expect(response.statusCode).toEqual(200);
  });
});



