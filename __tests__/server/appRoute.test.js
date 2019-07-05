const request = require('supertest');
const should = require('should');
const app = require('../../server/app');

describe('Test each endpoint:', () => {
  it('At test endpoint: Should fail with a status  of 404', () => {
    request(app)
      .get('/test')
      .expect(404);
  });

  it('At root: Should send a status code of 200', () => {
    request(app)
      .get('/')
      .expect(200);
  });

  it('At login: Should return data + statusCode of 200 ', () => {
    request(app)
      .get('/login')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('At signUp: Should post user info and return user info in local storage', () => {
    request(app)
      .post('/signup')
      .send({ username: 'testA', password: 'testAP' })
      .end((err, res) => res.locals.user);
  });

  it('At google-init: Should return a status code of 200 ', () => {
    request(app)
      .get('/google-init')
      .expect(200)
      .expect('Content-Type', /json/);
  });

  it('At google-homepage: Should redirect to homepage ', () => {
    request(app)
      .get('/google-homepage')
      .expect(200)
      .end((err, res) => {
        res.header.location.should.include('/homepage');
      });
  });

  it('At homepage: Should serve html file ', () => {
    request(app)
      .get('/homepage')
      .attach('file', '../client/dist/index.html')
      .expect(200);
  });
});
