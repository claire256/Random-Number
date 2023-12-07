// Random number between 1 and 100

const randomNumber = 1+ Math.floor(100*Math.random())

let tries = 0

function checkGuessedNumber(){
  
    const userInput = document.getElementById("inputGuess")
    const inputGuess = parseInt(userInput.value);
    
    tries++

    if (isNaN(inputGuess) || inputGuess < 1 || inputGuess > 100) {
        document.getElementById("output").textContent = "Please enter a valid number between 1 and 100.";
      } else if (inputGuess === randomNumber) {
        document.getElementById("output").textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${tries} attempts.`;
      } else if (inputGuess < randomNumber) {
        document.getElementById("output").textContent = "Number is too low! Try again.";
      } else {
        document.getElementById("output").textContent = "Number is too high! Try again.";
      }
      
      userInput.value = "";
}
