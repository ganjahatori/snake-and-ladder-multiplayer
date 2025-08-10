const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static("public"));

let players = [];

io.on("connection", (socket) => {
    console.log("New player:", socket.id);
    players.push({ id: socket.id, position: 0 });

    socket.emit("init", players);
    io.emit("updateBoard", players);

    socket.on("playerMove", ({ position }) => {
        const player = players.find(p => p.id === socket.id);
        if (player) player.position = position;
        io.emit("updateBoard", players);
    });

    socket.on("disconnect", () => {
        players = players.filter(p => p.id !== socket.id);
        io.emit("updateBoard", players);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
