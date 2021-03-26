//class syntax
class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.name = {
      firstName, lastName,
    };
    (this.age = age), (this.gender = gender), (this.interests = interests);
  }
  greeting() {
    console.log("Hi I am " + this.name.firstName);
  }
  farewell() {
    console.log(this.name.firstName + " has left the building");
  }
}

let sean = new Person('Sean', "Huang", 28, "Male", ['Photography', 'Travel']);
sean.greeting();
sean.farewell();


//inheritence working with class syntax
class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject, grade) {
    super(firstName, lastName, age, gender, interests);
    this.subject = subject;
    this.grade = grade;
  }
}

let winnie = new Teacher("winnie", "lai", 18, "female", ['travel', 'hiking'], 'business', 5);
winnie.greeting();
winnie.farewell();
