var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var socketIo = require('socket.io');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var moment = require('moment');

var compiler = webpack(webpackConfig);
var app = express();
var server = http.createServer(app);
var io = socketIo(server);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFild(path.join(__dirname, './public/index.html'));
});

var socketArray = [];
io.on('connection', socket => {
    socket.on('USER_LOGIN', userName => {
        socket.userName = userName;
        socketArray.push(userName);
        socket.broadcast.emit('ROOM_JOIN', userName);
        io.emit('UPDATE_USERS', socketArray);
    });

    socket.on('NEW_MESSAGE', message => {
        io.emit('NEW_MESSAGE_RETURN', {
            socketName: socket.userName,
            message,
            timeZone: moment()
        });
    });

    socket.on('USER_WRITING_CLIENT', data => {
        socket.broadcast.emit('USER_WRITING_SERVER', {});
    });

    socket.on('disconnect', data => {
        var index = socketArray.findIndex((value) => {
            return value == socket.userName;
        });
        socketArray.splice(index, 1);
        socket.broadcast.emit('ROOM_LEFT', socket.userName);
        io.emit('UPDATE_USERS', socketArray);
    });
});

server.listen(3000, function () {
    console.log('Server running on port 3000');
});
