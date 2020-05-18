const express = require('express');
const path = require('path');

const app = express();
const port = (process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`Listening on port ${port}`));
  