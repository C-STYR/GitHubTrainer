// Factory Function #1

// Function syntax
function factoryFunction1(name) {
  const newPerson = {};
  newPerson.name = name;
  return newPerson;
}

// Creating proto bond to a method
// Alternate proto bond syntax to a method

// Creating new object syntax
const person1 = factoryFunction1('Adam');
console.log(person1.name); // output: Adam


//---------------------------------------------------------------------------------
// Factory Function #2

// Function syntax
function factoryFunction2(name) {
  const newPerson = Object.create(newMethod); // Creating proto bond to a method
  newPerson.name = name;
  return newPerson;
}

// Creating proto bond to a method
const newMethod = {
  greet: function() {console.log(`Hi, ${this.name}`)}
}

// Alternate proto bond syntax to a method
// ???

// Create new object syntax
const person2 = factoryFunction2('Eve');
console.log(person2.name); // output: Eve
person2.greet(); // output: Hi, Eve

//------------------------------------------------------------------------------------
// Constructor Function

// Function syntax
function ConstructorFunction1(name) {
  this.name = name;
  this.greet = function() {console.log('hello')};
}

// Creating proto bond to a method
ConstructorFunction1.prototype.login = function() {
  console.log(`${this.name} is logged in`);
}

ConstructorFunction1.prototype.score = 0;

ConstructorFunction1.prototype.increment = function() {this.score++};


// Alternate proto bond syntax to a method
function fromConstructorFunction1(word, saying) {
 const person = new ConstructorFunction1(); // can call 'new' constructor inside function
 person.saying = function() {console.log(saying + word);}
 return person;
}

// Create new object syntax
const peep1 = new ConstructorFunction1('Kobi');
const peep2 = fromConstructorFunction1('homey', 'Whatup bruv, this is ya ');
peep1.login(); // output: Kobi is logged in
console.log(peep1.score); // output: 0
peep1.increment(); 
console.log(peep1.score); // output: 1
peep2.saying();
peep2.greet();
console.log(peep2.name); // output: undefined - can't access a parameter that is not passed into ConstructorFunction1 INSIDE of fromConstructorFunction1



//------------------------------------------------------------------------------------
// Class Function (or just Class?)

// Function syntax
class LetsMakeAnObject {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  sayMyName() {
    console.log(`My name is ${this.name}`);
  }
  addTwo() {
    this.score += 2;
  }
}

LetsMakeAnObject.prototype.whatsup = function() {console.log(`Whatstup ${this.name}`);}

// Creating proto bond to a method
// Alternate proto bond syntax to a method
// Create new object syntax

const me = new LetsMakeAnObject('Abe');
console.log(me.name); // output: Abe
console.log(me.score); // output: 0
me.sayMyName(); // output: My name is Abe
me.addTwo();
console.log(me.score); // output: 2
me.whatsup();
