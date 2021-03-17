let main = document.querySelector('main');

function createCatName(name) {
  const obj = {};
  obj.greeting = function() {
    let newPara = document.createElement('p');
    newPara.textContent = "Meow, I am " + name + "!";
    main.appendChild(newPara);
  }
  return obj;
}

//Using a constructor function
function Cat(name) {
  this.name = name;
  this.greeting = function() {
    let newPara = document.createElement('p');
    newPara.textContent = "Meow, I am " + name + "!";
    main.appendChild(newPara);
  }
}

let muffins = new Cat("muffins");
let stevie = new Cat("stevie");
let shadown = new Cat("shadow");

muffins.greeting();
console.log(stevie.name);
shadow.greeting();
