const config = require('./config');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/',express.static(config.publicDir));
//-socket
const players = require('./players.js');

io.on('connection', socket => {
	players.add(socket.id); console.log(`${socket.id} added`);
	io.emit('server:player-added',players.get(socket.id));

	socket.on('client:give-me-players', ()=>{
		socket.emit('server:all-players', players.get());
	});

	socket.on('client:player-moved',data=>{
		socket.broadcast.emit('server:player-moved', players.get(socket.id));
		players.set(data.id, {posX: data.posX, posY: data.posY, angle: data.angle});
	});

	socket.on('disconnect', ()=>{
		players.delete(socket.id);
		io.emit('server:player-disconnected',socket.id); console.log(`${socket.id} disconnected`);
	});
});
//=socket
server.listen(config.port, ()=>{
	console.log(`Listening on ${config.port}`);
});
