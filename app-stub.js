'use strict';

var express         = require('express'),
    app             = express(),
    errorhandler    = require('errorhandler'),
    bluemix         = require('./config/bluemix'),
    watson          = require('watson-developer-cloud'),
    path            = require('path'),
    // environmental variable points to demo's json config file
    extend          = require('util')._extend,
    bodyparser      = require('body-parser');

app.set('view engine', 'jade');
app.get('/', function (req, res) {
 res.render('index-stub.jade');
});

app.use(express.static(path.join(__dirname , './public')));

if (!process.env.VCAP_SERVICES) {
  app.use(errorhandler());
}
var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port);
console.log('listening at:', port);