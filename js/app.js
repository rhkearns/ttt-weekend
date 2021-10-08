/*------------------------------ Constants --------------------------------*/

const winConditions = [ [sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6], [sq1, sq4, sq7], [sq2, sq5, sq8], [sq0, sq4, sq8], [sq2, sq4, sq6]]


/*-------------------------- Variables (state) ----------------------------*/

let grid = []
let turn, winner


/*---------------------- Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const messageEl = document.getElementById('message')

console.dir(squares)

/*--------------------------- Event Listeners -----------------------------*/

sq0.addEventListener('click', playerTurn)
sq1.addEventListener('click', playerTurn)
sq2.addEventListener('click', playerTurn)
sq3.addEventListener('click', playerTurn)
sq4.addEventListener('click', playerTurn)
sq5.addEventListener('click', playerTurn)
sq6.addEventListener('click', playerTurn)
sq7.addEventListener('click', playerTurn)
sq8.addEventListener('click', playerTurn)

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
   grid = [...squares]
   for (let i = 0; i < grid.length; i++){
      // console.log(grid[i]);
      if (grid[i] === 1){
         console.log(grid[i]);
         grid[i].style.backgroundColor = "red"
      } else if (grid[i] === -1) {
         grid[i].style.backgroundColor = "white"
      } else if (grid[i] = null) {
         grid[i].style.backgroundColor = ''
      }
   }

   if (winner !== null) {
      renderWin(winner)
   } else playerTurn()
}

function playerTurn(turn){
   
}

function renderWin(winner){

}

function winCheck(){

}