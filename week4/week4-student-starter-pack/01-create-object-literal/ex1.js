//create an empty object literal and check it out in the console
// const cat = {};
// console.log(cat);

//2. fill the object with members
const cat = {
    name: {
        firstName: 'Lucas', 
        lastName: 'Huang'
    },
    age: 3,
    gender: 'male',
    colour: 'brown',
    interests: ['playing', 'travel', 'eating'],
    bio: function() {
        alert(cat.name['firstName'] + ' is ' + cat.age + ' years old and likes ' + cat.interests[0]);
    },

    //create another method that dispalys a greet with the cats first name and last name in the console.
    greeting: function() {
        console.log(cat.name.firstName + ' ' + cat.name.lastName + ': meow meow!');
    }

};

//3. accessing object members
//dot notation v.s. bracket notation
let catName = cat.name.firstName;
console.log(catName);
// console.log(cat.age);
console.log(cat['age']);
cat.greeting();

//ERROR
// cat['greting()'];


//update member
cat.age = 5
console.log(cat.age);

//add a new member
cat.fur = false;
console.log(cat, cat.fur);

//when is bracket notation the wat to go...
let memberName = 'fears';
let memberProperty = ['cucumbers', 'dogs'];
cat[memberName] = memberProperty;
console.log(cat);

//delete member
delete cat.age;
console.log(cat.age);

