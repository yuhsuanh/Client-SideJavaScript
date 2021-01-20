//1. PART ONE - VARIABLES & STATEMENTS

/*
 Multi-line
 comment
*/

//a. Variable Declaration

firstName = 'Yu-Hsuan';
var firstName;
console.log(firstName);

lastName = 'Huang';
// let lastName;//ERROR
console.log(lastName);

const BIRTHDAY = 'Sep. 30th, 1992';
// BIRTHDAY = 'Sep. 29th, 1992';//ERROR
console.log(BIRTHDAY);


lastName = true;


//b. variable scope
let globalVar = 'I am a global var';

function myFunction() {
    let bolValue = true;
    if(bolValue === true) {
        let localVar = 'I am a local var';
        console.log(localVar);
    }
}

myFunction();

// let anotherVar = glocalVar + ' ' + localVar;//ERROR


// PART TWO - Data Types
let variableOne = '1';
let variableTwo = 2;
let isCar = true;
let myArray = [1, 2, true, ['apple', 'orange', 'banana']];

let total = variableOne + variableTwo;
console.log(total);

let theNumber = 4;
console.log(theNumber++);
console.log(++theNumber);

//comparison operators
let num1 = 12;
let num2 = 20;

if(num1 < num2) {
    alert('num2 is bigger');
}

if(num1 === num2) {
    alert('They are equal');
}

if(num1 < num2 && num2 > 5) {
    console.log('both condition met');
}

let myString1 = 'Single queto example';
let myString2 = "Double queto exmaple";
// let megaString = myString1 + ', ' + myString2 + '!';
// console.log(megaString);

//template literal syntax
let megaString = `${myString1}, ${myString2}!`;
console.log(megaString);
