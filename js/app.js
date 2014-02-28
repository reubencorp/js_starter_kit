// Generate a random number
var random_number = Math.floor(Math.random() * 100);

// Get the user's name
var name = prompt("What is your name?");

// Ask user to enter a number
var guess = prompt("Hi " + name + ". Enter a number between 0 and 100")

// Tell user whether they won or lost
if(guess == random_number) {
  alert("You win!");
} else {
  alert("You lose!");
}

