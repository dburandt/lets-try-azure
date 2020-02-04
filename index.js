require("dotenv").config();

const express = require("express");

const app = express();
const log = console.log;
const port = process.env.PORT || 8080;
const { ENVIRONMENT } = process.env;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Healthy v3. Running in ${ENVIRONMENT}`);
});

app.listen(port, () => log(`Running on ${port} 🤙`));
