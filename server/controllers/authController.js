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
        res.send(response.data);
      })
      .catch(error => {
        console.log('Google Oauth getting code:', error);
      });
  },

  authController.OAuthGetToken = (req, res, next) => {
    console.log('in OAuthGetToken');
    const { code } = req.query;
    // const sessionState = req.query.session_state;
    // console.log('req :', req);
    axios
      .post(url)
      .then(response => {
        // console.log('response!!!!!: ', response);
        console.log('response.data!!!!!!: ', response.data);
        // // Oauth slides: 5. GitHub responds to Server with Access Token
        // let jwt = response.data.id_token;
        // jwt = jwt.split('.')[1];
        // const base64 = Buffer.from(jwt, 'base64').toString();
        // const { email } = JSON.parse(base64);
        // res.locals.email = email;
        // // res.cookie('email', email);

        // // Oauth slides: 5. Server saves Token in Cookie
        // res.cookie('jwt', jwt, { expires: new Date(Date.now() + 900000) });
        //   return next();
        // })
        // .catch(err => {
        //   console.log('Error in getting OAuth token', err);
      })
  }

module.exports = authController 
