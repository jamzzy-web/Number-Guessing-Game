const submitGuessButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guess');
const resultText = document.getElementById('result');

let secretNumber = Math.floor(Math.random() * 100) + 1;

submitGuessButton.addEventListener('click', function() {
    const guess = parseInt(guessInput.value);
    if (guess === secretNumber) {
        resultText.textContent = 'Congratulations! You guessed the number.';
    } else if (guess < secretNumber) {
        resultText.textContent = 'Too low! Try again.';
    } else {
        resultText.textContent = 'Too high! Try again.';
    }
});
