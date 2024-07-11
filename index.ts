#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any ={
    USD:1,// BASE CURRENCY
    EUR:0.95,
    GBP:0.76,
    IND:76.89,
    PKR:280,

}
let user_answer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter your currency",
            type:"list",
            choices:["USD","EUR","GBP","IND","PKR"]
        },
        {
            name:"to",
            message:"Enter your currency",
            type:"list",
            choices:["USD","EUR","GBP","IND","PKR"]
        },
        {
            name: "amount",
            message:"Enter your amount",
            type:"number"
        }
    ]
)
let fromamount = currency[user_answer.from]
let toamount = currency[user_answer.to]
let amount = user_answer.amount

let baseamount =amount/fromamount
let convertedamount = baseamount *toamount
console.log(fromamount);
console.log(toamount);
console.log(amount);
// console.log( convertedamount); // esy krny se value convert in point 
console.log(Math.round(convertedamount)); // esy krny se dont value convert show in point 


