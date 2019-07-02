// Imports: Dependencies
const cors = require('cors');

const bodyParser = require('body-parser');
const express = require('express');


const app = express();

// Database: MongoDB


// Middleware: CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Use: Static Files


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
