// COIN FLIP SIMULATOR
let outputEL = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEL = document.getElementById("tails-out");

let numHeads = 0;
let numTails = 0;

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  console.log(randNum);

  if (randNum < 0.5) {
    outputEL.innerHTML = "<img src ='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEL.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEL.innerHTML = numTails;
  }
}

let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;

let diceOutputEL = document.getElementById("dice-Output");

document.getElementById("roll").addEventListener("click", rollDice);

function rollDice() {
  var num = Math.round(Math.random() * 6);
  if (num == 6) {
    diceOutputEL.src = "img/6.png";
    six = six + 1;
  } else if (num == 5) {
    diceOutputEL.src = "img/5.png";
    five = five + 1;
  } else if (num == 4) {
    diceOutputEL.src = "img/4.png";
    four = four + 1;
  } else if (num == 3) {
    diceOutputEL.src = "img/3.png";
    three = three + 1;
  } else if (num == 2) {
    diceOutputEL.src = "img/2.png";
    two = two + 1;
  } else if (num == 1) {
    diceOutputEL.src = "img/1.png";
    one = one + 1;
  }
}
