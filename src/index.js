
const GAME_SIZE = 21;
let DIFFICULTY_LOOP_MS = 100;

let board;
let gameLoop;

let gameBoard;
let direction = "up";
let lastAppliedDirection;
let snakePos = [];
let foodPos = {};
let score = 0;

const randomCordinate = (min = 1, max = GAME_SIZE - 2 ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const resetSnakePosition = () => {
    snakePos = [
        {x : Math.floor(GAME_SIZE / 2), y: Math.floor(GAME_SIZE / 2)}
    ];
};
const generateNewFood =() => {
    let x;
    let y;

    do {
        x = randomCordinate()
        y = randomCordinate()
    } while(snakePos.find(el => el.x === x && el.y === y));
    foodPos.x = x;
    foodPos.y = y;

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

resetSnakePosition()
generateNewFood()

    gameLoop = setInterval(() => {
        calculateSnakePosition()
        updateBoard();
    }, DIFFICULTY_LOOP_MS)
}

const calculateSnakePosition = () => {
    const lastSegmentPosition = {
        x : snakePos[snakePos.length -1].x,
        y : snakePos[snakePos.length -1].y,
    }
    for(let i = snakePos.length -1; i >= 0; i--){
        const pos = snakePos[i]
        if(i === 0){
            if(direction === "up"){
                pos.y -= 1;
            }
            if(direction === "left"){
                pos.y -= 1;
            }
            if(direction === "down"){
                pos.y -= 1;
            }
            if(direction === "right"){
                pos.y -= 1;
            }
        }
    }
} 

const updateBoard = () => {
    gameBoard.forEach((row) => {
        row.forEach((cell) => {
            cell.classList = "cell"
        })
    });
    snakePos.forEach(({x, y}) => {
        gameBoard[x][y].classList.add("snake")
    })

    gameBoard[foodPos.x][foodPos.y].classList.add("food")


}

window.addEventListener("load" , () => {
     board = document.querySelector("#board")
    
    startGame();
});

document.addEventListener("keydown", (e) => {
    switch(e.code) {
        case 'ArrowUp' :
            if(lastAppliedDirection !== "down") direction = "up";
            break;
        case 'ArrowDown' :
            if(lastAppliedDirection !== "up") direction = "down";
            break;
        case 'ArrowLeft' :
            if(lastAppliedDirection !== "right") direction = "left";
            break;
        case 'ArrowRight' :
            if(lastAppliedDirection !== "left") direction = "right";
            break;
    }
})