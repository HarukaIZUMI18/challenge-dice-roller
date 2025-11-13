// à toi de jouer !
const numberOfDice =parseInt(prompt("Combien de dés tu veux lancer?"));
if(isNaN(numberOfDice)  || numberOfDice < 1 || numberOfDice > 15){
  console.log("Choisi entre 1 et 15");
} else {
for(let index = 0; index < numberOfDice; index++)
generateDice();
}



function generateDice() {
  const randomNumber = getRamdom(1, 6);
 const dice = document.createElement('div');
  dice.classList.add('dice');
 
  dice.style.backgroundPositionX = `-${(randomNumber - 1) * 100}px`;

  document.getElementById('player').append(dice);
}

function getRamdom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 