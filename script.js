let changeTurn
const X_class = 'X';
const O_class = 'O'; 


let gameBoardModule = (function(){
    let gameBoard = [];
    return {gameBoard}
})();

let playerFactory = (name, marker) => {
    return {name, marker};
}

let displayController = (function(){
    const boxGrid = document.querySelectorAll('.square')
    boxGrid.forEach(item => item.addEventListener('click', handleClick, {once: true}));
    
                                                    
function handleClick(e) {
    const box = e.target;
    const currentClass = changeTurn ? X_class : O_class;
    const returnCurrentClass = () => {return currentClass}
    placeMarker(box, currentClass);
    
    //pushMarkerToArray();
    //function pushMarkerToArray() {
    //
    //};
    // function that will render the contents of the array into the webpage
    function displayMarksFromArray() {
    const boxGrid = document.querySelectorAll('.square');
    
        for (let i = 0; i < boxGrid.length; i++){
            boxGrid[i].textContent = gameBoardModule.gameBoard[i];
        }
        //if -> already clicked (¿input value = true?) -> return
        //player input value = item.textContent
        //player input value .push(into the gameBoard array)
        //call displayMarksFromArray to re-display all boxes
    };

        // Put conditionals to check every for every box clicked if win conditions are met (winning text)
        // If this doesn't occur and all 9 boxes are clicked -> (tie text)

        changePlayerTurn()
    }
})();

function placeMarker(box, currentClass) {
    box.textContent = currentClass;
}

function pushMarkerToArray(currentClass) {
    gameBoardModule.gameBoard.push(currentClass);
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

// Put restart buton available, make it delete everything and start over again


