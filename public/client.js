const socket = io(window.location.origin);

socket.on('playerList', (players) => {
    console.log('Players:', players);
    document.getElementById('game').innerHTML =
        players.map(p => `${p.id}: ${p.position}`).join('<br>');
});

socket.on('playerMoved', ({ playerId, newPosition }) => {
    console.log(`${playerId} moved to ${newPosition}`);
});

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const player = { playerId: socket.id, newPosition: roll }; // replace with real game logic
    socket.emit('rollDice', player);
}
