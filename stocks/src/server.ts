import express, { Express } from 'express';
import httpServer from 'http';
import SocketIO from 'socket.io';
import { lookup, history } from 'yahoo-stocks';
import symbols from './snp500'
import advice from './trump'

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

type Stock = {
    symbol: string,
    name: string,
    exchange: string,
    currentPrice: number,
    highPrice: number,
    lowPrice: number,
    meanPrice: number,
    medianPrice: number
}

lookup(getRandomStock()).then((response:string) => {
    console.log(response)
});

composeAdvice().then((advice: string) => {
    console.log(advice);
})

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

function getRandomStock() {
    let min = Math.ceil(0);
    let max = Math.floor(498);
    let number = Math.floor(Math.random() * (max - min)) + min;
    return symbols[number];
}

function getRandomSaying() {
    let min = Math.ceil(0);
    let max = Math.floor(14);
    let number = Math.floor(Math.random() * (max - min)) + min;
    return advice[number];
}

async function composeAdvice() {
    return await lookup(getRandomStock()).then((response:Stock) => {
        return getRandomSaying() + response.name + ' (' + response.symbol + ') @ $' + response.currentPrice;
    });
}

http.listen(port, () => {
    console.log('listening on *:' + port);
});

http.on("close", () => {

})