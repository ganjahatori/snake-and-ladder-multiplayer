const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));

let players = [];

io.on("connection", (socket) => {
  console.log("Player connected:", socket.id);

  // Add new player
  players.push({ id: socket.id, position: 0 });

  // Send all players to the new connection
  socket.emit("init", players);

  // Broadcast when someone moves
  socket.on("playerMove", (data) => {
    const player = players.find(p => p.id === socket.id);
    if (player) {
      player.position = data.position;
    }
    io.emit("updateBoard", players);
  });

  socket.on("disconnect", () => {
    console.log("Player disconnected:", socket.id);
    players = players.filter(p => p.id !== socket.id);
    io.emit("updateBoard", players);
  });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
