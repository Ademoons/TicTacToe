
//document.getElementById("board").addEventListener("click", function() {
//document.getElementById("1").innerText = "O";
//})

// create player object but can't be called from console
const playerFactory = (name) => {
    const sayName = () => console.log(`Player name ${name}`)
    return {sayName}
  }


// first loop for array, second for event listeners
const gameBoardSetup = (() => {
    let gameBoard = [];

    for (let i = 1; i < 10; i++) {
        let temp = document.getElementById(i);
        gameBoard.push(temp);
        console.log(gameBoard);
    }

    for (let i = 0; i < 9; i++) {
        gameBoard[i].addEventListener("click", function() {
            if (document.getElementById(i + 1).innerText == "X" ||
            document.getElementById(i + 1).innerText == "O") {
                console.log('stop');
            } else if (document.getElementById(i + 1).innerText == "") {
                document.getElementById(i + 1).innerText = "X";
            }
            console.log("you clicked region number " + i);
        })
    }

    return {
        publicMethod: function() {
            console.log(gameBoard);
       //     document.getElementById("board").addEventListener("click", function() {
         //       document.getElementById("1").innerText = "X";
           // })
        }
    }

})();

gameBoardSetup.publicMethod();

/*    const one = document.getElementById("1");
    gameBoard.push[0];
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const four = document.getElementById("4");
    const five = document.getElementById("5");
    const six = document.getElementById("6");
    const seven = document.getElementById("7");
    const eight = document.getElementById("8");
    const nine = document.getElementById("9");
    return {
        one,two,three,four,five,six,seven,eight,nine
    }*/

//module
//displayController 


//game

//playSpot

//checkWinner

function displayStart() {
    document.getElementById("getPlayerInfo").style.display = "block";
}

function closeForm() {
    document.getElementById("getPlayerInfo").style.display = "none";
  }

function reset() {
    for (let i = 1; i < 10; i++) {
        let temp = document.getElementById(i);
        temp.innerHTML = "";  
    }
    closeForm();
}


