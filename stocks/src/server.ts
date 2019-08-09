import express, { Express } from 'express';
import httpServer from 'http';
import SocketIO from 'socket.io';
import { lookup, history } from 'yahoo-stocks';
import symbols from './snp500'

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

let number = getRandomInt();
lookup(symbols[number]).then((response:string) => {
    console.log(response)
});

io.on('connection', (socket: SocketIO.Socket) => {
    console.log('Client Has Connected, id: ' + socket.id)
    socket.on('tweet', (data: string) => {
        socket.emit('transformedTweet', applyTransformation(data))
    });

    socket.on('stock data', (symbol: string) => {
        lookup(symbol).then((response:string) => {
            socket.emit('stock data', response);
        });
    });
});

function applyTransformation(tweet: string):string {
    return 'sell AMD';
}

function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(498);
    return Math.floor(Math.random() * (max - min)) + min;
  }

http.listen(port, () => {
    console.log('listening on *:' + port);
});

http.on("close", () => {

})