let round = 0;
let player1 = 'player1';
let player2 = 'player2';
let dice1 = Math.floor(Math.floor()*6)+1;
let dice2 = Math.floor(Math.floor()*6)+1;

function game (){
	for (let i = 0; i < 10; i++) {
		round++;
		console.log(`**** Round ${round} *****`)
	}
}
game();