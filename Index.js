const DisplayStatus = document.querySelector('.substance');

let gameActive = true; 
let thisPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${thisPlayer} has won!`;
const tieMessage = () => `Game ended in a draw!`;
const thisPlayerTurn = () => `It's ${thisPlayer}'s turn`;

DisplayStatus.innerHTML = thisPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerSwitch() {

}
function handleCheckResult() {

}
function handleCellClick() {

}
function handleRestartGame() {

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('.restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index'));
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

handleCellPlayed(clickedCell, clickedCellIndex);
handleCheckResult();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
gameState[clickedCellIndex] = thisPlayer;
clickedCell.innerHTML = thisPlayer;
}

const winningCombinations = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
]

function handleCheckResult() {
    let roundWon = false; 
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningCombinations[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue; 
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        DisplayStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

let tiedRound = !gameState.includes("");
if (tiedRound) {
    DisplayStatus.innerHTML = tieMessage();
    gameActive = false; 
    return;
}
    handlePlayerSwitch();
}

function handlePlayerSwitch() {
    thisPlayer = thisPlayer === "X" ? "O" : "X";
    DisplayStatus.innerHTML = thisPlayerTurn();
}

function handleRestartGame() {
    gameActive = true; 
    thisPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    DisplayStatus.innerHTML = thisPlayerTurn();
    document.querySelectorAll('.cell')
    .forEach(cell => cell.innerHTML = "");
}