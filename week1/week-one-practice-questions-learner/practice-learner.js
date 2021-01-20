/*************** WEEK ONE PRACTICE QUESTIONS  ***********/

/*

1.) Challenge One 

Create two variables to store your first and last name. 
Create another variable to hold your current age. 
Concatentate your first and last name together (don't forget a space in between!) and store in a variable called fullName. 
Create a formula to calcuate your age in 20 years. Store the value in a variable called futureAge;
In the console or an alert box, display the users first name, last name, current age and how old they will be in 20 years  

*/

let firstName = 'Yu-Hsuan';
let lastName = 'Huang';
let age = 27;
let fullName = firstName + ' ' + lastName;
let futureAge = age + 20;
console.log('Full Name: ' + fullName + '\tAge: ' + age + '\tFuture Age: ' + futureAge);

/* 

2.) Challenge Two 

The following code has two errors present that prevent the information from being displayed correctly in the console (name and age). Can you fix the errors? 

*/

// const myName = "Default"; //ERROR
let myName = "Default";
myName = "Sumair";

// let myAge = "22"; //ERROR
let myAge = 22;

console.log( `Hey there ${myName}, did you know that in 20 years, you'll be ${myAge + 20}?`);

/* 

3.Challenge Three

You've got three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch
*/

//Statement 1: The elephant weighs less than the mouse
let eleWeight = 1000;
let mouseWeight = 2;
let weightComparison = eleWeight < mouseWeight;

// Statement 2: The Ostrich is taller than the duck
let ostrichHeight = 2;
let duckHeight = 0.3;
let heightComparison = ostrichHeight > duckHeight;

// Statement 3: The two passwords match
let pwd1 = 'stromboli';
let pwd2 = 'stROmBoLi';
let pwdMatch = pwd1 === pwd2;

/*

4. Bonus Challenge

Without using document.write, try to figure out a way to display the results of weightComparison, heightComparison and PwdMatch in the webpage, below the quote.

*/
let outputStr = 'WeightComparison: ' + weightComparison + '<br>HeightComparison: ' + heightComparison + '<br>PwdMatch: ' + pwdMatch;
document.getElementsByTagName('body')[0].innerHTML += outputStr;