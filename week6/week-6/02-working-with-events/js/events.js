// JavaScript Document

// STEP ONE:
/*
Your Code Explanation Here: 
*/
let button = document.getElementById("change");
// let button = document.querySelector("#change");
let body = document.querySelector("body");



//STEP TWO:
/*
Your Code Explanation Here: function to generate a random number for our RGB values 
rgb(#, #, #)
*/
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


//STEP THREE 
/*
Your Code Explanation Here: 
*/
button.onclick = () => {
    let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    body.style.backgroundColor = randomColor;
};



// STEP FOUR 
/*
Your Code Explanation Here: 
*/
// button.addEventListener('click', function() {
//     let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     body.style.backgroundColor = randomColor;
// });



//STEP FIVE: 
/*
Your Code Explanation Here: 
*/
// button.addEventListener('click', generateRGB)
// function generateRGB() {
//     let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     body.style.backgroundColor = randomColor;
// }


//STEP SIX:
/*
Your Code Explanation Here: 
*/
function sayHello() {
    alert('Helloooooooooooo!');
}

// button.onclick = sayHello;
// button.onclick = generateRGB; //override old statement

// button.addEventListener('click', sayHello);
// button.addEventListener('click', generateRGB); //can both exist (have 2 event listener)



//STEP SEVEN:
/*
Your Code Explanation Here: 
*/

button.onclick = (e) => {
    let randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = randomColor; //here e.target means button
};