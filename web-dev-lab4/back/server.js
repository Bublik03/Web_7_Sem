var express = require('express');
var cors = require('cors');
var router = require('./routes');
var conf = require('./config');


var app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(conf.port, function () {
   console.log('listen');
});