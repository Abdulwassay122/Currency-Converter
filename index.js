#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1, //base currency
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    UAED: 3.67,
    TL: 32.03
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "UAED", "TL(turkish lira)"],
        message: "Enter from currency:"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "PKR", "INR", "EUR", "UAED", "TL(turkish lira)"],
        message: "Enter to currency:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let formAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / formAmount;
let convertedAmount = baseAmount * toAmount;
// console.log(formAmount)
// console.log(toAmount)
// console.log(amount)
console.log(`${amount} ${userAnswer.from} is equal to ${convertedAmount} ${userAnswer.to}`);
