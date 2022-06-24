console.log(oldVar); // undefined
oldVar = "I am hoisted to the absoule top!";
console.log(oldVar); // I am hoisted to the absoule top!

var oldVar; // Will be hoisted in the global execution context

if (true) {
	var hoistedVar = "I am hoisted!"; // Will be hoisted in the global execution context
}

console.log(hoistedVar); // I am hoisted!

noKeyWordVar = "I am not hoisted, but honestly.. WTF?";
console.log(noKeyWordVar);

i = 10;
for (var i = 0; i < 2; i++) {
	console.log(`Iteration: ${i}`);
}
console.log(`Iteration: ${i} - i is hoisted!`);

function functionWithClousure(declareHoistedVar) {
	if (declareHoistedVar) {
		var hoistedVarWithClousure =
			"I am hoisted! But within the clousure (the lexical environment) of this function";
	}
	console.log(hoistedVarWithClousure);
}

// ReferenceError: hoistedVarWithClousure is not defined
// console.log(hoistedVarWithClousure);

functionWithClousure(true); // I am hoisted! But within the clousure (the lexical environment) of this function
functionWithClousure(false); // undefined

if (true) {
	const iAmAConst = "I am NOT hoisted!";
	console.log(iAmAConst);
}
//console.log(iAmAConst); // ReferenceError: iAmAConst is not defined

//iScoped = 0; // ReferenceError: Cannot access 'f' before initialization
for (let iScoped = 0; iScoped < 2; iScoped++) {
	console.log(`Iteration: ${iScoped}`);
}
// console.log(`Iteration: ${iScoped}`); // ReferenceError: i is not defined
