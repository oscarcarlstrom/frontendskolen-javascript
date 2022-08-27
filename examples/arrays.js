const names = ["Frodo", "Sam", "Merry", "Pippin"];

const mainCharacterName = names.find((name) => name === "Frodo");
console.log(`So, imagine that you have this guy named ${mainCharacterName}`);

const theOtherHobbitNames = names.filter((name) => name !== "Frodo");
console.log(`And his friends ${theOtherHobbitNames.join(", ")}`);

console.log("\nAnd they live in the shire, the land of the hobbits");
const shireFolks = names.map((name) => ({ name: name, species: "Hobbit" }));
console.log(shireFolks); // [{ name: "Frodo", species: "Hobbit" }, name: "Sam", species: "Hobbit", ...]

console.log("\nSo they are all hobbits then?");
const areTheyAllHobbits = shireFolks.every(
	({ species }) => species === "Hobbit"
);
console.log(
	areTheyAllHobbits ? "- Yeah, that is correct!" : "Nope, not all of them"
);

const aragorn = {
	name: "Aragorn",
	species: "Human",
	weapons: ["Sword", "Dagger", "Bow"],
};
console.log(
	`\nAnyway, they are joined by a ${aragorn.species} named ${aragorn.name}`
);
const hobbitsAndAragorn = [...shireFolks, aragorn];
console.log("And he gives them some weapons:");
shireFolks.forEach((hobbit) => {
	hobbit.weapons = ["Short Sword"];
	console.log(`${hobbit.name} gets ${hobbit.weapons}`);
});

// shireFolks.push(aragorn); //OBS!
// console.log(shireFolks);

console.log("\nThey meet some more guys at a concil...");
const theOtherdudesFromTheCouncil = [
	{ name: "Gandalf", species: "Wizard", weapons: ["Sword", "Staf"] },
	{ name: "Legolas", species: "Elf", weapons: ["Bow", "Dagger", "Dagger"] },
	{ name: "Gimli", species: "Dwarf", weapons: ["Axe"] },
	{ name: "Boromir", species: "Human", weapons: ["Sword", "Shield", "Bow"] },
];

console.log("\nAnd together they form The Fellowship of the Ring");
const fellowshipOfTheRing = hobbitsAndAragorn.concat(
	theOtherdudesFromTheCouncil
);

//Loops
console.log("\nWho is in the fellowship?");
console.log("We have:");
for (let i = 0; i < fellowshipOfTheRing.length; i++) {
	console.log(`- ${fellowshipOfTheRing[i].name}`);
}

console.log("\nRight, and the elfs?");
for (let fellowKey in fellowshipOfTheRing) {
	if (fellowshipOfTheRing[fellowKey].species === "Elf")
		console.log(`- ${fellowshipOfTheRing[fellowKey].name}`);
}
// for (let fellow in fellowshipOfTheRing) {
// 	if (fellow.species === "Elf") console.log(`- ${fellow.name}`);
// }

console.log("\nWhat about humans?");
for (let fellow of fellowshipOfTheRing) {
	if (fellow.species === "Human") console.log(`- ${fellow.name}`);
}
// for (let { name, species } of fellowshipOfTheRing) {
// 	if (species === "Human") console.log(`- ${name}`);
// }

console.log("\nWhat were the name of the hobbits again?");
console.log("The hobbits are:");
fellowshipOfTheRing
	.filter(({ species }) => species === "Hobbit")
	.forEach(({ name }) => console.log(`- ${name}`));

console.log("\nSo every good fellowship has a wizard, do they have one too?");
const isThereAWizardAmongThem = fellowshipOfTheRing.some(
	({ species }) => species === "Wizard"
);
console.log(
	"\n",
	isThereAWizardAmongThem ? "- Yes, they do!" : "No, not a single one!"
);

console.log("OK, so how many different species are there in the fellowship?");
const uniqueSpecies = [
	...new Set(fellowshipOfTheRing.map(({ species }) => species)),
].length;
console.log(`There are ${uniqueSpecies} species in the fellowship`);

console.log("\nAnd they are?");
console.log(
	[...new Set(fellowshipOfTheRing.map(({ species }) => species))].join(", ")
);

console.log("\nOK, so how many humans are there?");
const numberOfHumans = fellowshipOfTheRing.reduce(
	(prev, current) => (current.species === "Human" ? prev + 1 : prev),
	0
);
console.log(`There are ${numberOfHumans} in the fellowship`);

console.log("\nIn total, how many weapons do they have?");
const numberOfWeapons = fellowshipOfTheRing.flatMap(
	({ weapons }) => weapons
).length;
console.log(`They have ${numberOfWeapons} in total`);
