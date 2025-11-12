// à toi de jouer !
const newDiv = document.createElement("div");
newDiv.id = "player";
newDiv.classList.add("dice");
player.appendChild(newDiv);


function generateDice(){
	const randomNumber = Math.floor(Math.random() * 6) + 1;
    
	document.getElementById("player").innerHTML = randomNumber;
    document.getElementById("newDiv").src = randomNumber + ".dice"*100;
    console.log(randomNumber);
}


generateDice();