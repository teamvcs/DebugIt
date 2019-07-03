const User = require('../db/dbmodels');
const bcrypt = require('bcrypt');
const axios = require('axios');
const saltRounds = 10;
const { google } = require('googleapis');
const jwtDecode = require('jwt-decode');

const oauth2Client = new google.auth.OAuth2(
  '436697564537-vhpliaj47mlit669l8f3dgb6l1skesfo.apps.googleusercontent.com',
  'W_2T40elAtu_EImXbhdxAK2q',
  'http://localhost:3000/google-homepage'
);

const scopes = [
  'openid',
  'email'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',
  // If you only need one scope you can pass it as a string
  scope: scopes
});

const authController = {

  bCryptPassword: (req, res, next) => {
    const { username, password } = req.body;

    bcrypt.hash(password, saltRounds, function (err, hash) {
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
        bcrypt.compare(plainPassword, hashedPassword, function (err, response) {
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
  },

  OAuthGetCode: (req, res, next) => {
    axios
      .get(url)
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        console.log('Google Oauth getting code error:', error);
      });
  },

  OAuthGetToken: (req, res, next) => {
    console.log('in OAuthGetToken');
    console.log('req queryyyyy: ', req.query);
    const { code } = req.query;
    // const sessionState = req.query.session_state;
    oauth2Client.getToken(code)
      .then(response => {
        const { tokens } = response;
        oauth2Client.setCredentials(tokens);
        let decodedJwt = jwtDecode(tokens.id_token);
        const { email } = decodedJwt;
        res.locals.email = email;
        next();
      })
      // then we need to send the token back to
      .catch((err) => console.log('error getting access token and setting credentials: ', err));
  }
}

module.exports = authController;
