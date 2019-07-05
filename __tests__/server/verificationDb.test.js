const assert = require('assert');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { UserSchema } = require('../../server/db/schema');
const { addUser } = require('../../server/controllers/userController');

const UserTest = new mongoose.model('UserTest', UserSchema);

describe('A user\'s interaction with login and Sign up', () => {
  const req = {
    body: {
      username: 'Ariel',
      password: 'test1',
      score: 7,
    },
  };
  const { username, score, password } = req.body;

  it('Adds a new user to the database', () => {
    (async () => {
      const newUser = await addUser(req);
      assert.equal(newUser.username, req.body.username);
    });
  });


  it('Adds a new user to the database with hashed password', () => {
    bcrypt.hash(password, 10, (err, hash) => {
      (async () => {
        const newUser = await addUser({ username, hash, score });
        expect(newUser.hash).to.notBe.equal(password);
      });
    });
  });

  it('Verifies that the user exists in the database', () => {
    UserTest.findOne({ username }).then((user) => {
      assert.exists(user.username);
    });
  });

  it('Verifies that the user\'s password is encrypted when stored in the database', () => {
    UserTest.findOne({ username }).then((user) => {
      bcrypt.compare(password, user.password, (err, unhashed) => {
        if (password === unhashed) assert.equal(password, unhashed, 'Passwords are the same');
      });
    });
  });
});
