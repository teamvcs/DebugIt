const User = require('../db/dbmodels');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authController = {

  bCryptPassword: (req, res, next) => {
    const { username, password } = req.body;

    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) {
        res.status(424).json({
          msg: 'Error storing password', userSignedUp: false,
        });
      }
      // pass userName and hashedPassword to MongoDB
      req.body.hashedPassword = hash;
      next();
    });
  },

  verifyPassword: (req, res, next) => {
    const { username } = req.query;
    const plainPassword = req.query.password;
    // get hashedPassword from MongoDB
    let hashedPassword;
    User.findOne({
      username,
    })
    .then(user => {
      hashedPassword = user.password;
        bcrypt.compare(plainPassword, hashedPassword, function(err, response) {
          if (err) {
            res.status(424).json({
              msg: 'Error checking password', userSignedIn: false,
            });
          }
          if (response) {
            next();
          } else {
            res.end('Password is not correct');
          }
        });
    })
    .catch(err => console.error('Error in finding the user in DB')); 
  }

}

module.exports = authController;