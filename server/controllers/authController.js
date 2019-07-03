const bcrypt = require('bcrypt');
const axios = require('axios')
const saltRounds = 10;
const { google } = require('googleapis')

const oauth2Client = new google.auth.OAuth2(
  '436697564537-vhpliaj47mlit669l8f3dgb6l1skesfo.apps.googleusercontent.com',
  'W_2T40elAtu_EImXbhdxAK2q',
  'http://localhost:4000/problem'
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

const authController = {};

authController.bCryptPassword = function (req, res, next) {
  const { userName, plainTextPassword } = req.body;
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    if (err) {
      res.status(424).json({
        msg: 'Error storing password', userSignedUp: false,
      });
    }
    // pass userName and hashedPassword to MongoDB
    req.body.hashedPassword = hash;
  });
  next()
}

authController.verifyPassword = (req, res, next) => {
  const { username, plainTextPassword } = req.body;
  // get hash from MongoDB
  bcrypt.compare(plainTextPassword, hash, function (err, res) {
    if (err) {
      res.status(424).json({
        msg: 'Error checking password', userSignedIn: false,
      });
    }
  });
  next();
},

  authController.OAuthGetCode = (req, res, next) => {
    axios
      .get(url)
      .then(response => {
        console.log('response: ', response);
        res.send(response.data);
      })
      .catch(error => {

        console.log('Google Oauth getting code:', error);
      });
  },

  authController.OAuthGetToken = async (req, res, next) => {
    // console.log('in OAuthGetToken');
    const { code } = req.query;
    // const sessionState = req.query.session_state;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
  }

module.exports = authController 
