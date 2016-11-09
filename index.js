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

io.sockets.on('connection', socket => {
    let socketId = socket.id.slice(8);
    console.log('we have new connection from ', socketId);
    socket.on('message', body => {
        socket.broadcast.emit('message', {
            body,
            from: socketId
        });
    });
});

server.listen(3000, function () {
    console.log('Server running on port 3000');
});
