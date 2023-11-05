const gameBoard = (function() {
    const gameBoard = [];

    const addMarker = (marker, position) => {
        gameBoard[position] = marker;
    }


    return {addMarker}
})();

const gameSystem = (function() {
    const checkGameStatus = () => {

    }
})();

function createPlayer (name, marker) {
    return {name, marker};
}

const player1 = createPlayer("Player 1", "x");
const player2 = createPlayer("Player 1", "o");