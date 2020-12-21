const app = require('express')();
const cors = require('cors');
const path = require('path');
const config = require(path.join(__dirname, './config'));

const server = app.listen(config.port, () => {
    console.log(`App is listening on port ${config.port}`);
})

const io = require('socket.io')(server, {
    cors: {
        origin: config.origin,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    res.send('Hello!');
})

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast('message-broadcast', msg);
    })
})






