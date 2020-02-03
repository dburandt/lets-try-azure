const express = require('express');

const app = express();
const log = console.log;
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Healthy v3');
});

app.listen(port, () => log('Running 🤙'));
