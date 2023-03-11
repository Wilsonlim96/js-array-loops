const prompt = require('prompt-sync')();
// METHOD 1 
let fruitsList = ["apple", "orange", "mongo", "durian"];
fruitsList.push("strawberry");
// console.log(fruitsList);

// METHOD 2
const fruitStr = "apple orange mongo durian strawberry banana grapefruit raspberry";
let fruits = fruitStr.split(" ");
// console.log(fruits);



input = prompt("Enter a fruit: ");

let hasMatch = false; // Use to check if there is a match


// FOR-LOOP
    for (let i = 0; i < fruits.length; i++) { // to loop through the list of fruits in array
    // let i = 0 --> initiatlise the variable (i)
    // i < fruits.length --> condition to check whether i is less than no. of fruits in list; similar to if-statement
    // i++ --> action if condition above is satisfied; increases i by 1
        const currentFruit = fruits[i];
        if (currentFruit.toLowerCase() === input.toLowerCase()) { 
            console.log("Congratulations!!");
            hasMatch = true; // Set to true when there is a match
            break;
        }
        // console.log(currentFruit);
    }

    if (!hasMatch) console.log("Word has no match."); // Notify user when there is no match


