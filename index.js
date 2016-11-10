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

let socketArray = [];
io.on('connection', socket => {
    socket.name = 'user '.concat(socketArray.length);
    socketArray.push(socket.name);

    io.emit('NEW_USER', {
        socketArray,
        name: socket.name
    });

    socket.on('NEW_MESSAGE', message => {
        io.emit('NEW_MESSAGE_RETURN', {
            socketName: socket.name,
            message
        });
    });

    socket.on('disconnect', data => {
        // data = null;
        const index = socketArray.findIndex((value) => {
            return value == socket.name;
        });
        socketArray.splice(index, 1);
        io.emit('UPDATE_USERS', socketArray);
    });
});

server.listen(3000, function () {
    console.log('Server running on port 3000');
});
