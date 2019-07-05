const request = require('supertest');
const app = require('../../server/app');

describe('Test each endpoint:', () => {
  it('/Test: Should fail with a status  of 404', () => {
    request(app)
      .get('/test')
      .expect(404);
  });

  it('/: Should send a status code of 200', () => {
    request(app)
      .get('/')
      .expect(200);
  });

  it('/login: Should send a status code of 200 ', () => {
    request(app)
      .get('/login')
      .expect(200);
  });
  it('/signup: Should send a status code of 200 ', () => {
    request(app)
      .get('/signup')
      .expect(200);
  });

  it('/google-init: Should send a status code of 200 ', () => {
    request(app)
      .get('/google-init')
      .expect(200);
  });

  it('/google-homepage: Should send a status code of 200 ', () => {
    request(app)
      .get('/google-homepage')
      .expect(200);
  });

  it('/homepage: Should send a status code of 200 ', () => {
    request(app)
      .get('/homepage')
      .expect(200);
  });
});
