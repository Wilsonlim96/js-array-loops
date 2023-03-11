const fruitStr = "apple orange mongo durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" ");
// console.log(fruits);

const prompt = require('prompt-sync')();

input = prompt("Enter a fruit: ");

let hasMatch = false; // Use to check if there is a match

// WHILE-LOOP
let i = 0 // initiatlise the variable (i) for while loop
while (i < fruits.length) {
    const currentFruit = fruits[i];
    if (currentFruit.toLowerCase() === input.toLowerCase()) { 
        console.log("Congratulations!!");
        hasMatch = true; // Set to true when there is a match
        break;
    }        
    // console.log(currentFruit);
    i++
}
if (!hasMatch) console.log("Word has no match."); // Notify user when there is no match