
var app = express();
var http = require("http").Server(app);
const express = require('express')

const app = express()

app.get('/', function (req, res) {

  res.send('Hello World hellooooo')

})
const PORT = process.env.PORT || 5000;
app.listen(5000)


