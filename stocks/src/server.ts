import express, { Express } from 'express';
import httpServer from 'http';
import SocketIO from 'socket.io';

let app: Express = express();
let http: httpServer.Server = new httpServer.Server(app);
let io: SocketIO.Server = SocketIO(http);

// Grab port from Nodemon command & if not specified set to 5001
let port: string = process.argv[2];
if (port == undefined) port = "5001";

// create a GET route
app.get('/server', (_req, res) => {
    res.send({ express: 'The Express Server is Connected to React' });
});

io.on('connection', (socket: SocketIO.Socket) => {
    console.log('Client Has Connected, id: ' + socket.id)
    socket.on('tweet', (data: string) => {
        socket.emit('transformedTweet', applyTransformation(data))
    });
});

function applyTransformation(tweet: string):string {
    return 'sell AMD';
}

http.listen(port, () => {
    console.log('listening on *:' + port);
});

http.on("close", () => {

})