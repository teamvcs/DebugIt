// connect to db
const User = require('../db/dbmodels');

// user controller middleware functions
const userController = {

    // add user to DB if doesn't exist
    addUser: (req, res, next) => {
      const { username, hashedPassword } = req.body;
      User.create({
        username: username,
        password: hashedPassword,
        score: 0
      }).then(user => {
        res.locals.user = user;
        next();
      }).catch(err => console.error('The error in adding new user to DB'));
    }
}

module.exports = userController;