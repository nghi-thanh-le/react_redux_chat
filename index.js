const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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

let socketArray = [];
io.on('connection', socket => {
    socket.on('USER_LOGIN', userName => {
        socket.userName = userName;
        socketArray.push(userName);
        io.emit('UPDATE_USERS', socketArray)
    });

    socket.on('NEW_MESSAGE', message => {
        io.emit('NEW_MESSAGE_RETURN', {
            socketName: socket.userName,
            message
        });
    });

    socket.on('disconnect', data => {
        const index = socketArray.findIndex((value) => {
            return value == socket.userName;
        });
        socketArray.splice(index, 1);
        io.emit('UPDATE_USERS', socketArray);
    });
});

server.listen(3000, function () {
    console.log('Server running on port 3000');
});
