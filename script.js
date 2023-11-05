const gameBoard = (function() {
    const gameBoard = [];

    const addMarker = (marker, position) => {
        // add marker at specific position decided by mouseclick
        gameBoard[position] = marker;
    }
    return {addMarker};
})();

const gameSystem = (function(player1, player2) {
    const initGame = () => {
        // greet players
        // clear fields
        // shows which turn to play
    }
    const checkGameStatus = () => {
        // check if someone has won
        // else check if all fields are full
    }
    const changeTurnToPlay = () => {
        // change players turn
        player1.changeTurnToPlay
        player2.changeTurnToPlay
    }
    return {initGame, checkGameStatus, changeTurnToPlay};
})();

function createPlayer (name, marker) {
    let turnToPlay = false;
    const getTurnToPlay = () => turnToPlay;
    const changeTurnToPlay = () => {
        turnToPlay = !turnToPlay;
    }
    return {name, marker, getTurnToPlay, changeTurnToPlay};
}

const pppplayer1 = createPlayer("Player 1", "x");
const ppppplayer2 = createPlayer("Player 2", "o");