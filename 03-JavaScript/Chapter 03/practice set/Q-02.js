let gameNumber = 88;

let userNum = Number(prompt("Guess the game number : "));

while (gameNumber !== userNum) {
    userNum = Number(prompt("You've entered wrong number, Guess again:"))
}
    
console.log("Congratulations, you've entered the right number");