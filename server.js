
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var pug = require('pug');

app.set('view engine', 'pug');

// Directory Structure
app.set('views', 'src');

app.use(require('connect-livereload')());

app.use(require('less-middleware')(path.join(__dirname, 'src'), {
  //debug: true,
  dest: path.join(__dirname, 'assets'),
  preprocess: {
    path: function(pathname, req) {
      return pathname.replace(path.sep + 'css' + path.sep, path.sep);
    }
  },
  force: true
}));

// app.use(express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, 'assets')));
// app.use(express.static(path.join(__dirname, '_kitchen')));

app.use(express.static(__dirname + '/src'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/_kitchen'));

app.get('/', function(req, res){

  function data(file){
    return JSON.parse(fs.readFileSync(file));
  }

  res.render('index', {
    site: data('site-config.json'),
    staffs: data('contents/_data/staff.json'),
    fields: data('contents/_data/fields.json'),
    philosophies: data('contents/_data/philosophy.json'),
    services: data('contents/_data/service.json'),
    experiences: data('contents/_data/experience.json'),
    publications: data('contents/_data/publication.json'),
    company: data('contents/_data/general.json')
  });

});

app.listen(3000, function () {
    console.log('AIO Site Generator listening on port 3000!');
});

// Live Reload
var livereload = require('livereload').createServer({
    exts: ['pug', 'less', 'md']
});

livereload.watch(__dirname + '/src');
livereload.watch(__dirname + '/assets');
livereload.watch(__dirname + '/_kitchen');

