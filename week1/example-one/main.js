// declare and initialize a variable 

let button = document.querySelector('button');

//when the button is click, say hello will be invoked
button.onclick = sayHello;

//function definition 
function sayHello() {
    alert('Howdy Partner!');
    console.log('How are you today?');
}