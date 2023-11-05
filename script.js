const gameBoard = (function() {
    const gameBoardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    const getGameBoard = () => gameBoardArray;
    const addMarker = (marker, position) => {
        // add marker at specific position decided by mouseclick
        gameBoard[position] = marker;
    }
    return {getGameBoard, addMarker};
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

const displayController = (function() {
    const displayGrid = () => {
        console.log(`  ${gameBoard.getGameBoard()[0]}  |  ${gameBoard.getGameBoard()[1]}  |  ${gameBoard.getGameBoard()[2]}`);
        console.log('-----|-----|-----');
        console.log(`  ${gameBoard.getGameBoard()[3]}  |  ${gameBoard.getGameBoard()[4]}  |  ${gameBoard.getGameBoard()[5]}`);
        console.log('-----|-----|-----');
        console.log(`  ${gameBoard.getGameBoard()[6]}  |  ${gameBoard.getGameBoard()[7]}  |  ${gameBoard.getGameBoard()[8]}`);
    }
    return {displayGrid};
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