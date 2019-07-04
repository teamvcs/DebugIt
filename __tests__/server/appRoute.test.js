const request = require('supertest');
const app = require('../../server/app');

// expect all endpoints to return a status code of 200

describe('Test each endpoint', () => {
  it('It should send a status code of 200 from making a get request to the root endpoint', async () => {
    const result = await request(app).get('/');
    expect(result.statusCode).toEqual(200);
  });
});


// describe('Test each user....', () => {
//   test('It should send a status code of 200 after asynchronously validating a user', async (done) => {
//     const response = request(app).get('/login');
//     response.then((res) => {
//       expect(res.statusCode).toBe(200);
//       done();
//     });
//   });
// });
