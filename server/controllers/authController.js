const bcrypt = require('bcrypt');
const saltRounds = 10;

const authController = {

  bCryptPassword = (req, res, next) => {
    const { userName, plainTextPassword } = req.body;
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      if (err) {
        res.status(424).json({
          msg: 'Error storing password', userSignedUp: false,
        });
      }
      // pass userName and hashedPassword to MongoDB
      req.body.hashedPassword = hash; 
    });
    next()
  },

  verifyPassword = (req, res, next) => {
    const { username, plainTextPassword } = req.body;
    // get hash from MongoDB
    bcrypt.compare(plainTextPassword, hash, function(err, res) {
      if (err) {
        res.status(424).json({
          msg: 'Error checking password', userSignedIn: false,
        });
      }
    });
    next();
  },
  
}