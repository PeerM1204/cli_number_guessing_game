#! /usr/bin/env node
import inquirer from "inquirer";
while (true) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Guess the Number between 1 - 10:",
        },
    ]);
    let result = answer.userGuessedNumber === randomNumber
        ? "Congratulation You Guess the right Number"
        : `Sorry, the correct number was ${randomNumber}. Better luck next time.`;
    console.log(result);
    const playAgain = await inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "Do you want to play again?",
        },
    ]);
    if (!playAgain.again) {
        console.log("Thanks for playing!");
        break;
    }
}
