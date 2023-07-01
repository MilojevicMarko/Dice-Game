let round = 0;
let numberRound = prompt("Unesite broj zeljenih rundi");
let player1 = {
  name: prompt("Unesite prvog igraca"),
  score1 : 0,
  dice1: Math.floor(Math.random() * 6) + 1,
};

let player2 = {
  name: prompt("Unesite drugog igraca"),
  score2 : 0,
  dice2: Math.floor(Math.random() * 6) + 1,
};

function game() {
  round++;
  // let dice1 = Math.floor(Math.random() * 6) + 1;
  // let dice2 = Math.floor(Math.random() * 6) + 1;
  player1.score1 += player1.dice1;
  player2.score2 += player2.dice2;
  console.log(
    `%c*** Round ${round} *** \u{1F3B2}`,
    "color:tomato; background:yellow;margin:5px;font-size:20px;"
  );
  console.log(`igrac ${player1.name} ${player1.dice1} - igrac ${player2.name} ${player2.dice2} - TOTAL SCORE ${player1.score1} - ${player2.score2}`) 

  if (round === +numberRound) {
    winner();
  } else {
    setTimeout(game, 1500)
  }
}

function winner() {
  if (player1.score1 > player2.score2) {
    console.log(`%c*** WINNER *** ${player1.name}`, "font-size:30px;");
  }
  else if (player2.score2 > player1.score1) {
    console.log(
      `%c*** WINNER *** ${player2.name}`, "font-size:30px;text-align=center;"
    );
  }
  else if (player2.score2 === player1.score1) {
    console.log(`%c*** UNSOLVED - NO WINNER ****`, "font-size:30px;");
  }
}
game();

