
let main = document.querySelector("main");

//Create the constructor function
function Coffee(name, type, size, condiments) {
  this.name = name;
  this.type = type;
  this.size = size;
  this.condiments = condiments;
}

//instantiate that object
let seanCoffee = new Coffee("Sean", "Latta", "Medium", ["Whipped Cream", "Vanilla"]);

//move method to the object stored in the prototype property
Coffee.prototype.coffeeOrder = function() {
  let para = document.createElement("p");
  let sentence = this.name + " like a " + this.type + " size " + this.size + " with " + this.condiments[0] + " and " + this.condiments[1];
  para.innerHTML = sentence;
  //main.appendChild(para);
  console.log(sentence);
}

//methods are best defined on the prototype protype
Coffee.prototype.sayHi = function() {
  alert("Hi there, " + this.name);
}

//instantiate a bob
let bobCoffee = new Coffee("Bob", "Americano", "Grande", [""])

seanCoffee.sayHi();
seanCoffee.coffeeOrder();

bobCoffee.sayHi();
bobCoffee.coffeeOrder();


/******** Prototypal Inheritence ********/
//build another constructor
function Person(firstName, lastName, age, gender, interests) {
  this.name = {
    firstName, lastName
  },
  this.age = age,
  this.gender = gender,
  this.interests = interests;
}

//method for greeting
Person.prototype.greeting = function() {
  alert("Hey " + this.name.firstName);
}

//sean.greeting();
//inheriting from our Person
function Teacher(firstName, lastName, age, gender, interests, subject) {
   Person.call(this, firstName, lastName, age, gender, interests);
   this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

//defineProPerty() defines a new property directly on an object, or modifies an existing property on an object, and return the object
Object.defineProperty(Teacher.prototype,
'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true
});

//create our alert method`
Teacher.prototype.teacherGreeting = function() {
  alert("This is " + this.name.firstName + " and they teach " + this.subject);
  console.log("This is " + this.name.firstName + " and they teach " + this.subject);
}

//instantiate a teacher object
let seanTeacher = new Teacher('Sean', 'Huang', '28', 'male', ['photography', 'cycling'], 'Java');

seanTeacher.teacherGreeting();
