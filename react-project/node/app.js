var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var indexRouter = require('./routes/index');

var app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;
