const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server has been started at http://localhost:${PORT}`);
});
