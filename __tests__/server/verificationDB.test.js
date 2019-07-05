const assert = require('assert');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { UserSchema } = require('../../server/db/schema');

const UserTest = new mongoose.model('UserTest', UserSchema);

describe('A user\'s interaction with login and Sign up', () => {
  const TestUser = {
    username: 'Ariel',
    password: 'test1',
    score: 7,
  };
  const { username, score } = TestUser;
  let { password } = TestUser;

  it('Adds a new user to the database with hashed password', () => {
    bcrypt.hash(password, 10, (err, hash) => {
      password = hash;
      UserTest.create({ username, password, score }).then(() => {
        assert(UserTest.isNew);
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
