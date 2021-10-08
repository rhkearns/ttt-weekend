/*------------------------------ Constants --------------------------------*/

const winConditions = [ 
   [0, 1, 2], //Row 1
   [3, 4, 5], //Row 2
   [6, 7, 8], //Row 3
   [0, 3, 6], //Coll 1
   [1, 4, 7], //Coll 2
   [2, 5, 8], //Coll 3
   [0, 4, 8], //Diag L2R
   [2, 4, 6]] //Diag R2L


/*-------------------------- Variables (state) ----------------------------*/

let grid = []
let turn, winner


/*---------------------- Cached Element References ------------------------*/

const squares = document.querySelectorAll('.square')
const messageEl = document.getElementById('message')
const board = document.querySelector('.board')
const resetBtn = document.getElementById('reset-button')


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
resetBtn.addEventListener('click', init)

/*------------------------------ Functions --------------------------------*/

init()


function init (){
   grid = [null, null, null, null, null, null, null, null, null]
   turn = 1
   winner = null
   messageEl.innerHTML = "Player 1 is Xs, Player 2 is Os. <br> Lets Play Tic-Tac-Toe!"
   
   render()

}

function render(){
   for (let i = 0; i < squares.length; i++){
      if (grid[i] === 1){
         squares[i].innerText = "X"
         squares[i].style.backgroundColor = "red"
      } else if (grid[i] === -1) {
         grid[i] = -1
         squares[i].innerText = "O"
         squares[i].style.backgroundColor = "white"
      } else if (grid[i] = null) {
         grid[i] = null
         squares[i].style.backgroundColor = ''
      }
   }
   getWinner()
   if (winner !== null) {
      renderWin(winner)
   }
}

function playerTurn(event){
   if (event.target.innerText !== '') {
      messageEl.innerText = "Please select an unmarked box!"
      return
   }
   if (turn === 1){
      grid[event.target.id] = 1
   } else if (turn === -1) {
      grid[event.target.id] = -1
   }
   turn = turn * -1
   resetBtn.removeAttribute('hidden')
   render()
   
}

function renderWin(winner){
   if (winner === 1) {
      messageEl.innerText = "Player 1 Wins!!!"
      board.removeEventListener('click', playerTurn)
   } else if (winner === -1){
      messageEl.innerText = "Player 2 Wins!!!"
      board.removeEventListener('click', playerTurn)
   } else if (winner === 'T') {
      messageEl.innerText = "It's a Tie!!!"
      board.removeEventListener('click', playerTurn)
   }
}

function getWinner(){
   winConditions.forEach(function(cond){
      let counter = 0
      cond.forEach(function(num){
         counter += grid[num]
         })
      if (Math.abs(counter) === 3){
         winner = counter / 3
         return winner
      } else if (!grid.includes(null)) {
         winner = 'T'
         return winner
         }
      });
}
