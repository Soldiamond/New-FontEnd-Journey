var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var diceImage1 = "dice" + randomNumber1 + ".png"; 
var diceImage2 = "dice" + randomNumber2 + ".png"; 

document.querySelector(".img1").setAttribute("src", "/images/" + diceImage1);
document.querySelector(".img2").setAttribute("src", "/images/" + diceImage2);

// To determine the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "📢Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "📢Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Tie!😌";
}
