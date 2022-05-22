
var app = express();
var http = require("http").Server(app);
const express = require('express')

const app = express()

app.get('/', function (req, res) {

  res.send('Hello World hellooooo')

})

app.listen(3000)


