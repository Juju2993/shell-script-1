'use strict'

const Animal = function (newVoice) {
	this.voice = 'Animal voice ,';
	this.newVoice = `newVoice of ${newVoice}`;
};

//prototype method
Animal.prototype.speak = function () {
	console.log(`\n Can use ${this.voice}, ${this.newVoice}.\n`);
};

//create Animal
const someAnimal = new Animal('someAnimal');
someAnimal.speak();
//output: Can use Animal voice , newVoice of someAnimal.


//subclass
const Dog = function (age, name) {
	Animal.call(this);
	this.name = name;
	this.age = age;
	this.newVoice = ` This is ${name}'s newVoice,
  it's  age is ${age}.`;
};

//create dog0
const dog0 = new Dog(10, 'dog0');
//dog0.speak(); does not work
console.log(`${dog0.newVoice}
  It still can use ${dog0.voice},,\n`);
//output: This is dog0's newVoice,
//         it's  age is 10.
//         It still can use Animal voice ,,,


//create Dog speak method
Dog.prototype.speak = function () {
	console.log(` I am ${this.name}, I still can use ${this.voice},,\n`);
};

//create dog1
const dog1 = new Dog(4, 'dog1');
dog1.speak();
//output: I am dog1, I still can use Animal voice ,,,


//inherit Animal prototype speak
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

//create dog2
//now it will use Animal's proto speak,
// but dog's newVoice
const dog2 = new Dog(8, 'dog2');
dog2.speak();
//output:  Can use Animal voice ,,  This is dog2's newVoice,
//         it's  age is 8..


//for the same dog2 we can call parent prototype
Object.getPrototypeOf(dog2).speak.call(new Animal(dog2.name));
//output: Can use Animal voice ,, newVoice of dog2.


//"Object" is the root object
Object.prototype.speak = function () {
	console.log(' I speak from Master Object');
};

const Cat = function () {};
const cat = new Cat;
cat.speak();
// output: I speak from Master Object


//create dog3
const dog3 = new Dog(5, 'dog3');
//if we delete Dog's speak proto then
//dog3 will use Object's speak prototype
dog3.speak();
//output: Can use Animal voice ,,  This is dog3's newVoice,
//        it's  age is 5..


//let's override toUpperCase
String.prototype.toUpperCase = function () {
	return 'noName';
};

console.log(dog3.name.toUpperCase());
