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

let diceOutputEL = document.getElementById("dice-Output");

document.getElementById("roll").addEventListener("click", rollDice)

function rollDice(){
  if(rollDice){

  }  

}