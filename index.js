#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGreenBright.bold.black("\n \t ********BEST OF LUCK!******** \n \t"));
console.log(chalk.bgBlueBright.bold.black("\n \t ****Start your Quiz Now!****\n \t"));
async function quiz() {
    const Questions = await inquirer.prompt([
        {
            type: "list",
            name: "Q1",
            message: chalk.blueBright.bgCyanBright.bold("What is the file extension of TypeScript file"),
            choices: ["A) .js", "B) .ts", "C) .htmal", "D) .txt"],
        },
        {
            type: "list",
            name: "Q2",
            message: chalk.blueBright.bgCyanBright.bold("Which command is used to install TypeScript globally?"),
            choices: ["A) npm install typescript", "B) npm install -g typescript", "C) npm install - global typescript", "D) both (B)&(C)"],
        },
        {
            type: "list",
            name: "Q3",
            message: chalk.blueBright.bgCyanBright.bold("What command compiles typeScript file in a project?"),
            choices: ["A) tsc", "B) compile", "C) ts", "D) ts-compile"],
        },
        {
            type: "list",
            name: "Q4",
            message: chalk.blueBright.bgCyanBright.bold("Which npm command is use to initialize a new package.json file?"),
            choices: ["A) npm new", "B) npm create", "C) npm init", "D) npm generate"],
        },
        {
            type: "list",
            name: "Q5",
            message: chalk.blueBright.bgCyanBright.bold("Which is the file extension for JavaScript file?"),
            choices: ["A) .js", "B) .ts", "C) .htmal", "D) .txt"],
        },
        {
            type: "list",
            name: "Q6",
            message: chalk.blueBright.bgCyanBright.bold("Which command initialize a new TypeScript project?"),
            choices: ["A) tsc init", "B) tsc --init", "C) typescript init", "D)typescript --init"],
        },
    ]);
    let Score = 0;
    if (Questions.Q1 === "B) .ts") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    if (Questions.Q2 === "D) both (B)&(C)") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    if (Questions.Q3 === "A) tsc") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    if (Questions.Q4 === "C) npm init") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    if (Questions.Q5 === "A) .js") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    if (Questions.Q6 === "B) tsc --init") {
        Score++;
        console.log(chalk.green.bold("CORRECT ANSWER"));
    }
    else {
        console.log(chalk.red.bold("INCORRECT ANSWER"));
    }
    console.log(chalk.yellow.bold(`Your Score is ${Score} out of 6`));
    if (Score >= 3) {
        console.log(chalk.greenBright.bold.italic("Congratulations! You Passed this Quiz"));
    }
    else {
        console.log(chalk.redBright.bold("Ohhhh! you are not passed this Quiz, keep it up!"));
    }
}
quiz();
