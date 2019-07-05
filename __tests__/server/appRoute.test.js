const request = require('supertest');
const app = require('../../server/app');

// expect all endpoints to return a status code of 200

describe('Test each endpoint', () => {
  it('From test: It should fail with a status  of 404', async () => {
    request(app)
      .get('/test')
      .expect(404);
  });


  it('From root: It should send a status code of 200', () => {
    request(app)
      .get('/')
      .expect(200);
  });
  it('From login:  ', () => {
    request(app)
      .get('/login')
      .expect(200);
  });
  it('From signup:  ', () => {
    request(app)
      .get('/signup')
      .expect(200);
  });

  it('From google-init:  ', () => {
    request(app)
      .get('/google-init')
      .expect(200);
  });
  it('From google-homepage:  ', () => {
    request(app)
      .get('/google-homepage')
      .expect(200);
  });
  it('From homepage:  ', () => {
    request(app)
      .get('/homepage')
      .expect(200);
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
