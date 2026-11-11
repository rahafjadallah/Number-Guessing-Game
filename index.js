
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(
    Math.random() * (maxNum - minNum + 1) + minNum);

let guess;
let attempts = 0;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (Number.isNaN(guess)) {
        window.alert("Please enter a valid number!");
        continue;

    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number!");
        continue;

    } else {
        attempts++;
    }

    if (guess < answer) {
        window.alert("Too low! Try again.");

    } else if (guess > answer) {
        window.alert("Too high! Try again.");

    } else {
        window.alert(
            `Correct! The answer was ${answer}. Attempts: ${attempts}`);
        running = false;


    }
};

