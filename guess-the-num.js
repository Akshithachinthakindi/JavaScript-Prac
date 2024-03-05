let GuessNum = 22;
let UserNum = prompt("Guess the number: ");

while(UserNum != GuessNum) {
    UserNum = prompt("You guessed it wrong, Please guess again: ");
}

console.log("Yay! Congratulations, you guessed it right.");