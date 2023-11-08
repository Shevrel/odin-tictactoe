const gameBoard = (function() {
    const gameBoardArray = [];
    const getGameBoard = () => gameBoardArray;
    const initFreshGameBoard = () => {
        for (let idx = 0; idx < 9; idx++) {
            gameBoardArray[idx] = ' ';
        }
        return gameBoardArray;
    }
    const placeMarker = (player, position) => {
        // place marker in array only if it is "empty". Empty means a whitespace!
        if (position < 1 || position > 9) return false;
        if (gameBoardArray[position-1] === ' ') {
            gameBoardArray[position-1] = player.getMarker();
            // add index of array to playerArray
            player.addToMarkerArray(position-1);
            return true;
        }
        return false;

        // add marker at specific position decided by mouseclick
    }
    return {getGameBoard, initFreshGameBoard, placeMarker};
})();

const gameSystem = (function() {
    let turnCount = 1;
    let gameRunning = true;

    const getTurnCount = () => turnCount;
    const setTurnCount = () => turnCount++;

    const getGameStatus = () => gameRunning;
    const endGame = () => gameRunning = false;
    const startGame = () => gameRunning = true;

    const initGame = (player1, player2) => {
        console.log(`Welcome ${player1.getPlayerName()} (${player1.getMarker()}) and ${player2.getPlayerName()} (${player2.getMarker()})`)
        gameBoard.initFreshGameBoard();
        displayController.displayGrid();
        startGame();
        player1.changeTurnToPlay();
        // shows which turn to play
    }
    const checkGameEndCondition = (player) => {
        const winningPermutation = ['012', '048', '036', '147', '258', '246', '345', '678']
        // check if someone has won
        markerArray = player.getMarkerArray();
        markerArray = markerArray.sort(function(a, b){return a - b})
        if (markerArray.length < 3) return;
        const playerMarker = markerArray.join('');
        console.log(markerArray);
        for (let i = 0; i < winningPermutation.length; i++) {
            if (playerMarker.includes(winningPermutation[i])) {
                alert(`${player.getPlayerName()} won the game!.`)
                gameSystem.endGame();
            }
        }
        // else check if all fields are full // do it with TurnCount
        if (turnCount === 9){
            alert("Tie!");
            gameSystem.endGame();
        }
    }
    const changeTurnToPlay = (player1, player2) => {
        // change players turn
        player1.changeTurnToPlay();
        player2.changeTurnToPlay();
    }
    const getPlayerInputAndPlaceMarker = (player) => {
        let input;
        do {
            input = prompt(`${player.getPlayerName()}, please enter position to place marker:\n7 8 9\n4 5 6\n1 2 3\n`);
            if (input == '') {
                endGame();
                break;
            }
            input = parseInt(input);
        } while(!gameBoard.placeMarker(player, input));
    }
    const getPlayerOnTurn = (player1, player2) => {
        return player1.getTurnToPlay() ? player1 : player2
    }

    return {getTurnCount, setTurnCount, getGameStatus, startGame, endGame, initGame, checkGameEndCondition, changeTurnToPlay, getPlayerInputAndPlaceMarker, getPlayerOnTurn};
})();

const displayController = (function() {
    const displayGrid = () => {
        console.log(`  ${gameBoard.getGameBoard()[6]}  |  ${gameBoard.getGameBoard()[7]}  |  ${gameBoard.getGameBoard()[8]}`);
        console.log('-----|-----|-----');
        console.log(`  ${gameBoard.getGameBoard()[3]}  |  ${gameBoard.getGameBoard()[4]}  |  ${gameBoard.getGameBoard()[5]}`);
        console.log('-----|-----|-----');
        console.log(`  ${gameBoard.getGameBoard()[0]}  |  ${gameBoard.getGameBoard()[1]}  |  ${gameBoard.getGameBoard()[2]}`);
    }
    return {displayGrid};
})();

function createPlayer (name, marker) {
    let turnToPlay = false;
    let markerArray = [];

    const getPlayerName = () => name;
    const getMarker = () => marker;
    const getTurnToPlay = () => turnToPlay;
    const addToMarkerArray = (position) => markerArray.push(position)
    const getMarkerArray = () => markerArray;
    const changeTurnToPlay = () => {
        turnToPlay = !turnToPlay;
    }
    return {getPlayerName, getMarker, getTurnToPlay, addToMarkerArray, getMarkerArray, changeTurnToPlay};
}

const player1 = createPlayer("Player 1", "x");
const player2 = createPlayer("Player 2", "o");

// init game and show grid
gameSystem.initGame(player1, player2);
// while no one has won
while (gameSystem.getGameStatus()) {
    let playerOnTurn = gameSystem.getPlayerOnTurn(player1, player2);
    // get user input and place marker
    gameSystem.getPlayerInputAndPlaceMarker(playerOnTurn);
    // show grid
    displayController.displayGrid();
    // check if someone has won
    gameSystem.checkGameEndCondition(playerOnTurn);
    // change players turn
    gameSystem.changeTurnToPlay(player1, player2);
    gameSystem.setTurnCount();
}