var express = require ('express');
var bodyParser = require('body-parser');
var methodOverride =require('method-override');
var handleBars = require('express-handlebars');
var app = express();
app.use(express.static(_direname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',handleBars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 8080;
app.listen(port);