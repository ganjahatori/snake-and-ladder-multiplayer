const socket = io(window.location.origin);

let myId = null;
let players = [];

socket.on("connect", () => {
    myId = socket.id;
    console.log("Connected as", myId);
});

// Initial list of players
socket.on("init", (serverPlayers) => {
    players = serverPlayers;
    renderBoard();
});

// Whenever any player moves
socket.on("updateBoard", (serverPlayers) => {
    players = serverPlayers;
    renderBoard();
});

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;

    // Find my current position
    const me = players.find(p => p.id === myId);
    if (!me) return;

    let newPos = me.position + roll;

    // Optional: Apply snakes and ladders mapping here
    // if (snakeMap[newPos]) newPos = snakeMap[newPos];

    socket.emit("playerMove", { position: newPos });
}

function renderBoard() {
    document.getElementById('game').innerHTML =
        players.map(p => `${p.id}: ${p.position}`).join('<br>');
}
