/****** MODULE ONE ******/
//Declaring Variables in three ways. There are globally scoped as they are not in a function
let name = 'Sean';
var age = 28;
const status = "Person";

//lets play with var
age = 27;
var age;

//arrays
let students = ["Watt", "Joseph", "Matt"];

//built in browser methods
students.pop();
students.push("Jacob");

//For loop to loop though our array
for (let i=0; i<students.length; i++) {
  console.log(students[i]);
}

//functions
function sayHello() {
  //select a space
  let main = document.querySelector('main');
  //dom manipulation
  let p = document.createElement("p");
  //make some content for the p tag template literal syntax
  p.textContent = `Hey there I am ${name}`;
  //append the child
  main.appendChlid(p);
}
//invoke the function. aka call the fun!
sayHello();



/***** MODULE TWO******/
//work with the dom
let mainDiv = document.querySelector('.container');
//returns a group/collection
let alsoMainDiv = document.getElementsByClassName("container");
//return the first in the collection
let alsoMainDiv = document.getElementsByClassName("container")[0];


//Travese the DOM
let header = mainDiv.firstElementChlid;
//manipulate the elements in the dom
header.style.border = "2px solid blue";

//working with events
let buttons = document.querySelectorAll('button');

for (let j = 0; j < buttons.length; j++) {
  buttons[j].onclick = (event) => {
    let clicked = event.target;
    clicked.style.background = "#BADA55";
  }
}



/***** MODULE THREE******/
let cat = {
  name : 'Lilly',
  type : 'Siamese',
  age : 3,
  interests : ['sleeping', 'biting'];
};

//OOJS
//Bulid a constructor function
let Cat = function(name, type, age, interests) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.interests = interests;

  //the greeting
  this.greeting = function() {
    alert(`Meow, my name is ${this.name}`);
  }
};

//instiate a Cat
let lilly = new Cat('Lilly', 'Siamess', 3, ['sleeping', 'biting']);

//the prototype method
Cat.prototype.greeting = function() {
  alert(`Meow, my name is ${this.name}`);
}
