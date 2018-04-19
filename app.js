require('dotenv').config();

var express = require('express');
var request = require('request');
var app = express();
 
var PORT = process.env.PORT || 3000;

app.get('/weather', function(req, res){
    var query = req.query.q;
    console.log(query);
    request('http://api.apixu.com/v1/current.json?key=426a78a336a84d3fa50234530181704&q=' + query + '&days=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            const responseData = JSON.parse(body);
            res.status(200)
                .json(responseData); // this will send data to client.

        }
    })
});
app.listen(PORT, () => console.log('server is running'));