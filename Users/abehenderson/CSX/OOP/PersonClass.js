
class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log(`Hello, ${this.name}!`);
  }

}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'

// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string "hello".