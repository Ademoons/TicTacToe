const playerFactory = (name, move, score) => {
    return {name, move, score}
  };



// first loop for array, second for event listeners
const gameBoardSetup = (() => {
    let gameBoard = [];

    // generates array from gameboard grid
    for (let i = 1; i < 10; i++) {
        let temp = document.getElementById(i);
        gameBoard.push(temp);
    }

    // adds click listeners and contains game moves
    for (let i = 0; i < 9; i++) {
        gameBoard[i].addEventListener("click", function() {
            if (document.getElementById(i + 1).innerText == "X" ||
            document.getElementById(i + 1).innerText == "O") {
                console.log('stop');
            } else if (document.getElementById(i + 1).innerText == "") {
                let move = document.getElementById(i + 1).innerText = "O";
                gameBoard.splice(i, 1, move);
                console.log(gameBoard);
            }
            console.log("you clicked region number " + i);

            // checks winner
            gameBoard.forEach(move => { 
                if (gameBoard[0] == move && gameBoard[1] == move && gameBoard[2] == move ||
                    gameBoard[3] == move && gameBoard[4] == move && gameBoard[5] == move ||
                    gameBoard[6] == move && gameBoard[7] == move && gameBoard[8] == move ||
                    gameBoard[0] == move && gameBoard[3] == move && gameBoard[6] == move ||
                    gameBoard[1] == move && gameBoard[4] == move && gameBoard[7] == move ||
                    gameBoard[2] == move && gameBoard[5] == move && gameBoard[8] == move ||
                    gameBoard[0] == move && gameBoard[4] == move && gameBoard[8] == move ||
                    gameBoard[2] == move && gameBoard[4] == move && gameBoard[6] == move) {
                        console.log('winner');
                // no tie
                }
            })
        })
    }

    return {
        publicMethod: function() {
            console.log(gameBoard);
        }
    }

})();

gameBoardSetup.publicMethod();

function displayStart() {
    document.getElementById("getPlayerInfo").style.display = "block";
}

function closeForm() {
    document.getElementById("getPlayerInfo").style.display = "none";
  }
  
function startNewGame() {
    const playerX = playerFactory(document.getElementById("xPlayerName").value, "X", 0);
    const playerO = playerFactory(document.getElementById("oPlayerName").value, "O", 0);
    console.log(playerX.name);
    console.log(playerO.name);
    document.getElementById("footerText").innerText = `${playerX.move} Player ${playerX.name}: ${playerX.score}
    ${playerO.move} Player ${playerO.name}: ${playerO.score}`;
    closeForm();  
}

function reset() {
    for (let i = 1; i < 10; i++) {
        let temp = document.getElementById(i);
        temp.innerHTML = "";  
    }
    closeForm();
}

const playerX = playerFactory('Sempione', "X", 0);
const playerO = playerFactory('Arfonso', "O", 0);
