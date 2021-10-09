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

resetBtn.addEventListener('click', init)
resetBtn.addEventListener('click', resetClasses)

board.addEventListener('click', function(event){
   event.preventDefault()
   if (winner === null){
      playerTurn(event)
   }
})

/*------------------------------ Functions --------------------------------*/

init()


function init (){
   grid = [null, null, null, null, null, null, null, null, null]
   turn = 1
   winner = null
   messageEl.innerHTML = "Player 1 is Xs, <br> Player 2 is Os. <br> Lets Play Tic-Tac-Toe!"
   
   render()
   resetBtn.setAttribute('hidden', true)
}

function render(){
   for (let i = 0; i < squares.length; i++){
      if (grid[i] === 1){
         squares[i].classList.add("player1")
         squares[i].classList.remove("unclaimed")
         squares[i].innerText = "X"
         console.log(squares[i].classList);
      } else if (grid[i] === -1) {
         grid[i] = -1
         squares[i].classList.add("player2")
         squares[i].classList.remove("unclaimed")
         squares[i].innerText = "O"
         console.log(squares[i].classList);
      } else {
         grid[i] = null
         squares[i].classList.add("unclaimed")
         squares[i].innerText = ""
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
      messageEl.innerHTML = "It's <span class='player'>Player 2's</span> Turn"
   } else if (turn === -1) {
      grid[event.target.id] = -1
      messageEl.innerHTML = "It's <span class='player'>Player 1's</span> Turn"
   }
   turn = turn * -1
   resetBtn.removeAttribute('hidden')
   render()
   
}

function renderWin(winner){
   if (winner === 1) {
      messageEl.innerText = "Player 1 Wins!!!"
   } else if (winner === -1){
      messageEl.innerText = "Player 2 Wins!!!"
   } else if (winner === 'T') {
      messageEl.innerText = "It's a Tie!!!"
   }
}

function getWinner(){
   winConditions.forEach(function(cond){
      let counter = 0
      cond.forEach(function(num){
         counter += grid[num]
      if (Math.abs(counter) === 3){
         winner = counter / 3
         return winner
      } else if (winner === null && !grid.includes(null)) {
         winner = 'T'
         return winner
         } else {
            winner === null
            return winner
         }
      });
   })
}

function resetClasses(event) {
   squares.forEach(function(evt){
      evt.classList.remove("player1")
      evt.classList.remove("player2")
   })
}