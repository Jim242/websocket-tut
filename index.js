var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();

var server = app.listen(4000, function(){
    console.log('Running on port 4000')
});

//Static files
app.use(express.static('public'));

//Socket setup --server backend side
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
});