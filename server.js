const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

let players = [];  // Tracks { id, position }

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);
  players.push({ id: socket.id, position: 1 });
  io.emit('playerList', players);

  socket.on('disconnect', () => {
    players = players.filter(p => p.id !== socket.id);
    io.emit('playerList', players);
  });

  socket.on('rollDice', ({ playerId, newPosition }) => {
    const player = players.find(p => p.id === playerId);
    if (player) {
      player.position = newPosition;
      io.emit('playerMoved', { playerId, newPosition });
    }
  });
});

const PORT = process.env.PORT || 3000; // Important for Render
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

