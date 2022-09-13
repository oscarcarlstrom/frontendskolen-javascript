class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const person = new Person("Oscar", "Carlström");
console.log(`Hello ${person.firstName} ${person.lastName}!`); // Hello Oscar Carlström!

class Animal {
	#privateName;
	constructor(name) {
		this.name = name;
		this.#privateName = `Kose-${name}`;
	}

	getAnimalName() {
		// Klasse-metoder rebinder ikke this!
		return this.name;
	}

	getAnimalPrivateName() {
		return this.#privateName;
	}

	getPropertiesFromUnboundThis = () =>
		`name: ${this.name}, #privateName: ${this.#privateName}`;
}

const animal = new Animal("Fido");
console.log(animal.name); // Fido
console.log(animal.getAnimalName()); // Fido

// console.log(animal.#privateName); // SyntaxError: Private field '#privateName' must be declared in an enclosing class
console.log(animal.privateName); // undefined
console.log(animal.getAnimalPrivateName()); // Kose-Fido

console.log(animal.getPropertiesFromUnboundThis()); // name: Fido, #privateName: Kose-Fido

class Dog extends Animal {
	static species = "Dog";
	constructor(name) {
		super(name);
		this.numberOfDogs++;
	}

	bark() {
		console.log("Woff woff!");
	}

	fetchBamse() {
		console.log("🧸");
	}
}

const dog = new Dog("Bajas");
console.log(dog.getAnimalPrivateName()); // Kose-Bajas

dog.bark(); // Woff woff!
dog.fetchBamse(); // 🧸

console.log(dog.species); // undefined
console.log(Dog.species); // Dog
