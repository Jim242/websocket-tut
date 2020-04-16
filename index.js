var express = require('express');

//App Setup
var app = express();

var server = app.listen(4000, function(){
    console.log('Running on port 4000')
});

app.use(express.static('public'));
