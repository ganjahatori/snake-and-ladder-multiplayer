const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // allow all origins
    methods: ["GET", "POST"]
  }
});

app.use(express.static(path.join(__dirname, 'public'))); // adjust folder

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('rollDice', (data) => {
    io.emit('diceRolled', data); // send to everyone
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
