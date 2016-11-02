
var express = require('express');
var app = express();
var lessMiddleware = require('less-middleware');
var fs = require('fs');
var path = require('path');


app.set('view engine', 'pug');

// Directory Structure
app.set('views', 'src');
app.use(lessMiddleware(__dirname + '/src', {
  dest: __dirname + '/assets/css'
}));

app.use(require('connect-livereload')());

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/_kitchen/templates'));


app.get('/', function(req, res){
  var pugConfig = fs.readFileSync('site-config.json');
  var _site = JSON.parse(pugConfig);
  res.render('index', {site: _site});
});

app.listen(3000, function () {
    console.log('AIO Site Generator listening on port 3000!');
});

// Live Reload
var livereload = require('livereload').createServer({
    exts: ['pug', 'less']
});

livereload.watch(__dirname + '/src');
livereload.watch(__dirname + '/assets');
livereload.watch(__dirname + '/_kitchen/templates/**/*');
