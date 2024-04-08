#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 100);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 10: ",
        
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guessed right number")
}
else if (answer.userGuessedNumber > randomNumber){
    console.log("you guessed highest number");
}
else {
    console.log("you guessed lowest number");
}

console.log(answer);