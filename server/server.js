// Imports: Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const PORT = 3000;

const { addUser } = require('./controllers/userController');
const { bCryptPassword, verifyPassword } = require('./controllers/authController');

const app = express();

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
})

app.get('/login', verifyPassword, (req, res, next) => {
  console.log("I am passed!")
  // res.json(res.locals.user);
})

app.post('/signup', bCryptPassword, addUser, (req, res, next) => {
  res.json(res.locals.user);
})

app.get('/problem:ID', (req, res, next) => {
  // do stuff
})

app.listen(PORT, () => {
  console.log(`The server has been started at http://localhost:${PORT}`);
});

module.exports = app;
