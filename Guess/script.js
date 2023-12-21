// // Random number between 1 and 100


function checkGuessedNumber(guessNumber){
  
  const randomNumber = 1+ Math.floor(100*Math.random())
    console.log('randoooo',randomNumber)

    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
        return("Please enter a valid number between 1 and 100.")
      }
       else if (guessNumber === randomNumber) {
        return(`Congratulations! You guessed the correct number ${randomNumber}`)
      } 
      else if (guessNumber < randomNumber){
        return("Number is too low! Try again.")
      } 
      else {
        return("Number is too high! Try again.")
      }
}
 
console.log(checkGuessedNumber(10))






