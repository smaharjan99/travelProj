var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');
var basePath = "/service";

var app = express();

app.use(bodyParser.json()); //to support JSON encoded bodies

app.use(bodyParser.urlencoded({ //to support URL encoded bodies
    extended: true
}));



//hosting static files
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.redirect('/views/index.html');
})


app.listen(2020, function (req, res) {
    console.log('OPENING PORT # 2020');
})