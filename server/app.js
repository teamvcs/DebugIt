const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

const PORT = 3000;

const authController = require('./controllers/authController');
const { addUser } = require('./controllers/userController');
const { bCryptPassword, verifyPassword } = require('./controllers/authController');

const app = express();
// const addUser = require('./controllers/dbControlller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Serve Static Files
app.use(express.static(path.join(__dirname, '../client/public')));

// initial load
app.get('/', (req, res, next) => {
  res.set('Content-Type', 'index/html')
    .status(200)
    .sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/login', verifyPassword, (req, res, next) => {
  console.log('I am passed!');
});

app.post('/signup', bCryptPassword, addUser, (req, res, next) => {
  res.json(res.locals.user);
});

// auth testing
app.get('/google-init', authController.OAuthGetCode);
app.get('/google-homepage', authController.OAuthGetToken, (req, res) => {
  console.log('made it to google homepage, email: ', res.locals.email);
  res.redirect('/homepage/');
});

app.get('/homepage/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// app.get('/problem', displayProblems, openCurrentProblem, (req, res, next) => {
//   // pass current problem to front end (prompt and ready solution)

//   // pass the problems that user solved/didn't solve
// })

module.exports = app;
