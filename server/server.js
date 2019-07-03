// Imports: Dependencies
const cors = require('cors');

const bodyParser = require('body-parser');
const express = require('express');

const authController = require('./controllers/authController')

const app = express();

// Database: MongoDB


// Middleware: CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use: Static Files


// auth testing
app.get('/google-init', authController.OAuthGetCode);
app.get('/problem', authController.OAuthGetToken, (req, res) => {
  console.log('res.locals.email: ', res.locals.email)
  res.status(200)
  res.send('/problem/1')
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
