const a = { prop1: 1 };
let b = { prop1: 1 };

console.log(a === b); // false

b = a;
console.log(a === b); // true

b = { ...a };
console.log(a === b); // false

function jsonEqual(x, y) {
	return JSON.stringify(x) === JSON.stringify(y);
}

console.log(jsonEqual(a, b)); // true

const c = { prop1: 1, prop2: 2 };
const d = { prop2: 2, prop1: 1 };
console.log(jsonEqual(c, d)); // false - the order of attributes matters when using JSON.stringify!

//Assumes only primitives and objects as values
function deepEquals(x, y) {
	if (typeof x === "object" && typeof y === "object") {
		const keysOfX = Object.keys(x);
		return (
			keysOfX.length === Object.keys(y).length &&
			keysOfX.every((key) => deepEquals(x[key], y[key]))
		);
	} else if (typeof x !== "object" && typeof y !== "object") {
		return x === y;
	}
	return false;
}

console.log(deepEquals(a, b)); // true
console.log(deepEquals(c, d)); // true

const complexA = {
	prop1: 1,
	prop2: {
		innerProp1: 2,
	},
};

const complexACopy = { ...complexA };
console.log(deepEquals(complexA, complexACopy)); // true

complexA.prop2.innerProp1 = "modified!";
console.log(deepEquals(complexA, complexACopy)); // true! - prop2 is the same reference for both complexA and complexACopy (shallow copy)

//Assumes only primitives and objects as values
function deepCopy(value) {
	if (typeof value !== "object") return value;

	const objectClone = {};
	Object.keys(value).forEach((key) => {
		objectClone[key] = deepCopy(value[key]);
	});

	return objectClone;
}

const complexADeepCopy = deepCopy(complexA);
console.log(deepEquals(complexA, complexADeepCopy)); // true

complexA.prop2.innerProp1 = "modified again!";
console.log(deepEquals(complexA, complexADeepCopy)); // false!

// Desctructure assignment
const { prop2 } = complexA;

//Assign vs spread
const extendedProp2ByAssign = Object.assign(prop2, { innerProp2: "New prop!" });
console.log(prop2 === extendedProp2ByAssign); // true (referance is still the same - assign modifies the object "in place" in memory)

const extendedProp2BySpread = { ...prop2, innerProp2: "New prop!" };
console.log(prop2 === extendedProp2BySpread); // false (new referance - spread creates a new referance in memory)

//Merging
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const mergedObject = Object.assign({}, o1, o2, o3);
console.log(mergedObject); // { a: 1, b: 2, c: 3 }

const mergedObjectAlt = { ...o1, ...o2, ...o3 };
console.log(mergedObjectAlt); // { a: 1, b: 2, c: 3 }
