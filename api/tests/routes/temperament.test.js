const request = require('supertest');
const app = require('../../src/app');

describe('Temperament route', () => {
    it("Debe responder con un 'status' 200 al hacer un req GET a '/temperaments'", async () => {
      const response = await request(app).get("/temperaments");
      expect(response.statusCode).toEqual(200);
    });
  });
  