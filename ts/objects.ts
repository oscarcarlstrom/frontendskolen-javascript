import { number } from "yargs";

const aCar = { brand: "Volvo", color: "Red" };

type Car = {
	brand: string;
	color: string;
};

const aSecondCar: Car = { brand: "Toyota", color: "White" };

interface ICar {
	brand: string;
	color: string;
}

const aThirdCar: ICar = { brand: "Tesla", color: "Black" };

const drive = ({ brand, color }: ICar) =>
	console.log(`Driving a ${color} ${brand}`);

drive(aCar);
drive(aSecondCar);
drive(aThirdCar);

type CarTypeCopy1 = Car;
type CarTypeCopy2 = ICar;

interface ICarCopy1 extends Car {}
interface ICarCopy2 extends ICar {}

interface Pet {
	name: string;
}

interface Dog extends Pet {
	bark: () => void;
	fetch: (item: string) => void;
}

const dog: Dog = {
	name: "Bajas",
	bark: () => console.log("Voff voff!"),
	fetch: (item: string) => console.log(`Fetching ${item}`),
};

type Cat = Pet & {
	meow: () => void;
	scratch: (item: string) => void;
};

const cat: Cat = {
	name: "Tom",
	meow: () => console.log("Meeeeow!"),
	scratch: (item: string) => console.log(`Scratching ${item}`),
};

interface Input {
	name: string;
	value: string;
	error?: string;
}

type InputType = {
	name: string;
	value: string;
	error?: string;
};

// Inheritance with overrides
type Puppy = Omit<Dog, "fetch" | "bark">;

const puppy: Puppy = {
	name: "Zorro",
	// bark: () => console.log("Vooff!"),
};

interface Kitten extends Omit<Cat, "name"> {
	eyesOpen: boolean;
}

const kitten: Kitten = {
	//name: "Kitty",
	meow: () => console.log("Meeeow"),
	scratch: (item: string) => console.log(`Scratching ${item}`),
	eyesOpen: false,
};

interface A {
	requiredAProp: string;
	optionalAProp?: number;
}

interface B extends A {
	optionalAProp: number;
}

interface C extends A {
	optionalAProp?: never;
	extraProp: number;
}

const getRequiredProp = (obj: A | C) => obj.requiredAProp;
const myC: C = {
	requiredAProp: "I am required!",
	extraProp: 22,
	// optionalAProp: 12,
};
const required = getRequiredProp(myC);

const getOptinalProp = (obj: A | C) => obj.optionalAProp;

getOptinalProp(myC);

const getExtraOrOptionalProp = (obj: A | C) =>
	obj.hasOwnProperty("extraProp") ? (obj as C).extraProp : obj.optionalAProp;
