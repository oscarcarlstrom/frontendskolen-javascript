class Animal {
	#privateName;
	constructor(name) {
		this.name = name;
		this.#privateName = name;
	}

	getAnimalName() {
		// Klasse-metoder Binder ikke this!
		return this.name;
	}

	getAnimalPrivateName() {
		return this.#privateName;
	}

	getPropertiesFromUnboundThis = () =>
		`name: ${this.name}, #privateName: ${this.#privateName}`;
}

const animal = new Animal("Oscar");
console.log(animal.name);
console.log(animal.getAnimalName());

// console.log(animal.#privateName); // SyntaxError: Private field '#privateName' must be declared in an enclosing class
console.log(animal.privateName);
console.log(animal.getAnimalPrivateName());

console.log(animal.getPropertiesFromUnboundThis());

class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	bark() {
		console.log("Woff woff!");
	}

	fetchBamse() {
		console.log("🧸");
	}
}

const dog = new Dog("Bajas");
console.log(dog.getAnimalPrivateName());
dog.bark();
dog.fetchBamse();
