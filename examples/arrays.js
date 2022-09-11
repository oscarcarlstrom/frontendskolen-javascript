const names = ["Frodo", "Sam", "Merry", "Pippin"];

const mainCharacterName = names.find((name) => name === "Frodo");
console.log(`So, imagine that you have this guy named ${mainCharacterName}`);

const theOtherHobbitNames = names.filter((name) => name !== "Frodo");
console.log(`And his friends ${theOtherHobbitNames.join(", ")}`);

console.log("\nAnd they live in the shire, the land of the hobbits");
const shireFolks = names.map((name) => ({ name: name, people: "Hobbit" }));
console.log(shireFolks); // [{ name: "Frodo", people: "Hobbit" }, name: "Sam", people: "Hobbit", ...]

console.log("\nSo they are all hobbits then?");
const areTheyAllHobbits = shireFolks.every(({ people }) => people === "Hobbit");
console.log(
	areTheyAllHobbits ? "- Yeah, that is correct!" : "Nope, not all of them"
);

const aragorn = {
	name: "Aragorn",
	people: "Human",
	weapons: ["Sword", "Dagger", "Bow"],
};
console.log(
	`\nAnyway, they are joined by a ${aragorn.people} named ${aragorn.name}`
);
const hobbitsAndAragorn = [...shireFolks, aragorn];
console.log(hobbitsAndAragorn);
console.log(shireFolks);

console.log("\nAnd he gives them some weapons:");
shireFolks.forEach((hobbit) => {
	hobbit.weapons = ["Short Sword"];
	console.log(`${hobbit.name} gets ${hobbit.weapons}`);
});

shireFolks.push(aragorn); //OBS - this mutates the original array!
console.log(shireFolks);

console.log("\nThey meet some more guys at a council...");
const theOtherdudesFromTheCouncil = [
	{ name: "Gandalf", people: "Wizard", weapons: ["Sword", "Staff"] },
	{ name: "Legolas", people: "Elf", weapons: ["Bow", "Dagger", "Dagger"] },
	{ name: "Gimli", people: "Dwarf", weapons: ["Axe"] },
	{ name: "Boromir", people: "Human", weapons: ["Sword", "Shield", "Bow"] },
];

console.log(`\nAnd together they form "The Fellowship of the Ring":`);
const fellowshipOfTheRing = hobbitsAndAragorn.concat(
	theOtherdudesFromTheCouncil
);
console.log(fellowshipOfTheRing);

//Loops
console.log("\nWho is in the fellowship?");
console.log("We have:");
for (let i = 0; i < fellowshipOfTheRing.length; i++) {
	console.log(`- ${fellowshipOfTheRing[i].name}`);
}

console.log("\nRight, and which of them are the elfs?");
for (let fellowKey in fellowshipOfTheRing) {
	if (fellowshipOfTheRing[fellowKey].people === "Elf")
		console.log(`- ${fellowshipOfTheRing[fellowKey].name}`);
}

// Beware that for-in loops iterates the object keys!
for (let fellow in fellowshipOfTheRing) {
	if (fellow.people === "Elf") console.log(`- ${fellow.name}`);
}

console.log("\nWhat about humans then?");
for (let fellow of fellowshipOfTheRing) {
	if (fellow.people === "Human") console.log(`- ${fellow.name}`);
}
// Alternativly:
// for (let { name, people } of fellowshipOfTheRing) {
// 	if (people === "Human") console.log(`- ${name}`);
// }

console.log("\nWhat were the name of the hobbits again?");
console.log("The hobbits are:");
fellowshipOfTheRing
	.filter(({ people }) => people === "Hobbit")
	.forEach(({ name }) => console.log(`- ${name}`));

console.log("\nSo every good fellowship has a wizard, do they have one too?");
const isThereAWizardAmongThem = fellowshipOfTheRing.some(
	({ people }) => people === "Wizard"
);
console.log(
	isThereAWizardAmongThem ? "- Yes, they do!" : "No, not a single one!"
);

console.log(
	"OK, so how many different kinds people are there in the fellowship?"
);
const peopleOfDifferentKind = [
	...new Set(fellowshipOfTheRing.map(({ people }) => people)),
].length;
console.log(
	`There are ${peopleOfDifferentKind} different kinds of people in the fellowship`
);

console.log("\nAnd they are?");
console.log(
	[...new Set(fellowshipOfTheRing.map(({ people }) => people))].join(", ")
);

console.log("\nOK, so how many humans are there?");
const numberOfHumans = fellowshipOfTheRing.reduce(
	(prev, current) => (current.people === "Human" ? prev + 1 : prev),
	0
);
console.log(`There are ${numberOfHumans} in the fellowship`);

console.log("\nIn total, how many weapons do they have?");
const numberOfWeapons = fellowshipOfTheRing.flatMap(
	({ weapons }) => weapons
).length;
console.log(`They have ${numberOfWeapons} in total`);
