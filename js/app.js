/*------------------------------ Constants --------------------------------*/

// const winConditions = [ [sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6], [sq1, sq4, sq7], [sq2, sq5, sq8], [sq0, sq4, sq8], [sq2, sq4, sq6]]


/*-------------------------- Variables (state) ----------------------------*/

let grid = []
let turn, winner


/*---------------------- Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const messageEl = document.getElementById('message')
const board = document.querySelector('.board')
console.dir(board)

/*--------------------------- Event Listeners -----------------------------*/

// sq0.addEventListener('click', playerTurn)
// sq1.addEventListener('click', playerTurn)
// sq2.addEventListener('click', playerTurn)
// sq3.addEventListener('click', playerTurn)
// sq4.addEventListener('click', playerTurn)
// sq5.addEventListener('click', playerTurn)
// sq6.addEventListener('click', playerTurn)
// sq7.addEventListener('click', playerTurn)
// sq8.addEventListener('click', playerTurn)
board.addEventListener('click', playerTurn)
function test(e){
   console.log(e.target);
}
/*------------------------------ Functions --------------------------------*/

init()


function init (){
   grid = [null, 1, null, null, -1, null, null, 1, null]
   turn = 1
   winner = null
   messageEl.innerText = "Player 1, it's your turn"
   
   render()

}

function render(){

   for (let i = 0; i < squares.length; i++){
      if (squares[i].innerText === "X"){
         grid[i] = 1
         squares[i].style.backgroundColor = "red"
      } else if (squares[i].innerText === "O") {
         grid[i] = -1
         squares[i].style.backgroundColor = "white"
      } else if (squares[i].innerText = '') {
         grid[i] = null
         squares[i].style.backgroundColor = ''
      }
   }

   if (winner !== null) {
      renderWin(winner)
   } else playerTurn()
}

function playerTurn(event){
   if (turn === 1){
      event.target.innerText = "X"
      console.dir(event.target)
      grid[event.target.id] = 1
   } else if (turn === -1) {
      event.target.innerText = "O"
      grid[event.target.id] = -1
   }
   turn = turn * -1
   console.log(turn);
   render()
   
}

function renderWin(winner){

}

function winCheck(){

}