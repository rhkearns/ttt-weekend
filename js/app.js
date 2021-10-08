/*------------------------------ Constants --------------------------------*/

const winConditions = [ [sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6], [sq1, sq4, sq7], [sq2, sq5, sq8]]


/*-------------------------- Variables (state) ----------------------------*/

let grid = []
let turn, winner


/*---------------------- Cached Element References ------------------------*/

const squares = document.querySelector('.board')
const messageEl = document.getElementById('message')

console.dir(squares)

/*--------------------------- Event Listeners -----------------------------*/

squares.addEventListener('click', tester)

function tester(e){
   console.log(e.target);
}

/*------------------------------ Functions --------------------------------*/

init()


function init (){
   grid = [null, null, null, null, null, null, null, null, null]
   turn = 1
   winner = null
   

}

function render(){
   grid.forEach(square){

   }

}

function playerTurn(turn){

}