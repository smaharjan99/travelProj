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

app.use(connection(mysql, {
    host: 'localhost',
    user: 'personuser',
    password: 'personuser123',
    database: 'persontbl'
}, 'request'));


var getPostObj = {
    flight: {
        query: "INSERT into flighttbl set ?",
        url: basePath + "/bookings",
        ids: []
    }

};


var getServiceObj = {
    flight: {
        query: "SELECT * FROM flighttbl",
        url: basePath + "/bookings",
        ids: []
    },
    flightid: {
        query: "SELECT * FROM flighttbl where flightid=?",
        url: basePath + "/bookings/:flightid",
        ids: ["flightid"]
    }
};

for (var key in getServiceObj) {
    getService(getServiceObj[key].url, getServiceObj[key].ids, getServiceObj[key].query);
}

for (var key in getPostObj) {
    postService(getPostObj[key].url, getPostObj[key].ids, getPostObj[key].query);
}


function getService(url, ids, query) {
    app.get(url, function (req, res, next) {
        //var query = "SELECT * FROM personinfo";
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.params[ids], function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check getService query");
                }
                res.json(results);
            });
        });
    });
}

function postService(url, ids, query) {
    app.post(url, function (req, res, next) {
        // var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, req.body, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check postService query");
                }
                res.json(results);
            });
        });
    });
}

//hosting static files
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.redirect('/views/index.html');
})


app.listen(2020, function (req, res) {
    console.log('OPENING PORT # 2020');
})