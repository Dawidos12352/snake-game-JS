
const GAME_SIZE = 21;
let DIFFICULTY_LOOP_MS = 100;

let board;
let gameLoop;

let gameBoard;
let direction = "";
let lastAppliedDirection;
let snakePos = [];
let foodPos = {};
let score = 0;

const randomCordinate = (min = 1, max = GAME_SIZE - 2 ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function startGame(){
    direction ="";
    board.innerHTML = ''; 
    gameBoard = [];
    score = 0;

    for (let y = 0; y <= GAME_SIZE; y ++){
        const rowEl = document.createElement("div")
        rowEl.classList.add("row")
        for(let x = 0; x < GAME_SIZE; x++) {
            const cellEl = document.createElement("div")
            cellEl.classList.add("cell")
            cellEl.innerText = `${x} / ${y}`

            if(!gameBoard[x]){
                gameBoard[x] = []
            }
            gameBoard[x][y] = cellEl
            rowEl.append(cellEl)
        }
        board.append(rowEl)
    }
}

window.addEventListener("load" , () => {
     board = document.querySelector("#board")
    
    startGame();
})