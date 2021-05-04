require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;
const path = __dirname + '/build/';

app.use(express.static(path));

app.listen(port, () => {
  console.log(`Backend API for House of Yabut is listening at http://localhost:${port}`);
});