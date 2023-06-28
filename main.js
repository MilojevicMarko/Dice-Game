let round = 0;
let player1 = prompt("Unesite ime prvog igraca");
let player2 = prompt("Unesite ime drugog igraca");
let score1 = 0;
let score2 = 0;
function game() {
    round++;
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    score1 += dice1;
    score2 += dice2;
    console.log(
      `%c*** Round ${round} *** \u{1F3B2}`,
      "color:tomato; background:yellow;margin:5px;font-size:20px;"
    );
    console.log(
      `%c${player1} ${dice1} : ${dice2} ${player2}                                    (${score1}:${score2}`,"font-size:20px;"
    );
    if (round === 10) {
      winner();
    } else {
			setTimeout(game, 1500)
		}
}
game();
function winner() {
  if (score1 > score2) {
    console.log(`%c*** WINNER *** ${player1}`, "font-size:30px;");
  }
  else if (score2 > score1) {
    console.log(
      `%c*** WINNER *** ${player2}`,"font-size:30px;text-align=center;"
    );
  }
	else if (score2 === score1) {
		console.log(`%c*** UNSOLVED - NO WINNER ****`, "font-size:30px;");
	}
	
}
