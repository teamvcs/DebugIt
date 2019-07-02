const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const addUser = require('./controllers/dbControlller');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req,res)=>{
  res.set({'Content-Type': 'text/html'})
  .status(200)
  .sendFile(path.join(__dirname, './../client/dist/index.html'))
})

app.post('/', addUser, (req,res)=>{
  
})

const PORT = 4000 || process.env;


app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
