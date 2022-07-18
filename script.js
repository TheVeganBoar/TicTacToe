const boxGrid = document.querySelectorAll('.square')
let changeTurn
const X_class = 'X';
const O_class = 'O';
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
] 
const startGameButton = document.querySelector('#start-game-button');
const playersInfo = document.querySelectorAll('.player-info');
const winningTextMessage = document.querySelector('.winner-message');
const restartButton = document.querySelector('#restart-button');

let gameBoardModule = (function(){
    let gameBoard = [];
    return {gameBoard}
})();

let playerFactory = (name, marker) => {
    return {name, marker};
}

startGameButton.addEventListener('click', /*applyInput*/ startGame);

//function applyInput(){
//
//}

function startGame() {
    playersInfo.forEach(info => {
        //poner que el nombre sea = al input
        info.style.display = 'block'});
}

let displayController = (function(){
    changeTurn = false; // remove?????
    boxGrid.forEach(box => {
        box.classList.remove(X_class)
        box.classList.remove(O_class)
        box.removeEventListener('click', handleClick)
        box.addEventListener('click', handleClick, {once: true})
    });
    winningTextMessage.classList.remove
    
                                                    
function handleClick(e) {
    const box = e.target;
    const currentClass = changeTurn ? X_class : O_class;
    const returnCurrentClass = () => {return currentClass}

    //Place markers when clicking a box
    placeMarker(box, currentClass);
    
    //Check for win
    if (checkForWin(currentClass)) {
        endTheGame(false)
    }    
    
    //Check for draw
    if (checkForDraw()) {
        endTheGame(true)
    }

    //Switch turns
    changePlayerTurn()
    }

    //Show restart button to play again
    restartGame()
})();

function placeMarker(box, currentClass) {
    box.textContent = currentClass;
}

function pushMarkerToArray(currentClass) {
    gameBoardModule.gameBoard.push(currentClass);
}

function checkForWin(currentClass) {
    winningConditions.some(condition => {
        return condition.every(index => {
            return boxGrid[index].classList.contains(currentClass);
        })
    })
}   

function checkForDraw() {
    return [...boxGrid].every(box => {
        return box.classList.contains(X_class) || box.classList.contains(=_class)
    }) 
}

function endTheGame(draw) {
    if (draw) {
        winningTextMessage.textContent = "It's a draw!";
    } else {
        winningTextMessage.textContent = `${changeTurn? "O player wins!":"X player wins"}`;
    }
    const showText = document.querySelector('.game-over');
    showText.style.display = 'block';
}

function changePlayerTurn() {
    changeTurn = !changeTurn;
}

function displayTurnText() {
    startGameDiv = document.querySelector('.start-game');
    turnTextDiv = document.createElement('div');
    startGameDiv.appendChild(turnTextDiv);
    turnText = document.createElement('p');

    if (changeTurn === true) {
        turnText.textContent = 'X turn';
    } else {
        turnText.textContent = 'O turn';
    }

    if (turnTextDiv = '') {
        turnTextDiv.appendChild(turnText);
    } else {
        turnTextDiv.removeChild(turnText); //no funciona, revisar
        turnTextDiv.appendChild(turnText);
    }
}

function restartGame() {
    restartButton.addEventListener('click', displayController());
}


