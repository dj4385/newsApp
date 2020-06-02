const express = require('express');
const app = express();
const port = 4400;
const path = require('path');
const cors = require('cors')
app.use(cors());

app.listen(port);

app.use(express.static('dist/bitoco'));

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/*');
// });

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist//index.html');
});

app.use(express.static(path.join(__dirname, 'dist/bitoco')));


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

console.log("app is listing on port-->>",port);