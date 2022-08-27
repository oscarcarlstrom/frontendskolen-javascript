//Regular
function sayHello() {
	console.log("Hello!");
}

//Anonym
const sayHey = function () {
	console.log("Hey!");
};

//Self innvoking
(function justSayHello() {
	console.log("Hello!");
})();

//Arrow function
const sayHi = () => {
	console.log("Hi!");
};

//Immidate return (impure)
const greet = (name) => console.log(`Hello ${name}`);

//Pure function (with immidate return)
const getPureGreatingPhrase = (name) => `Hello ${name}`;

//Impure function
let greeting = "Hello";
const getImpureGreatingPhrase = (name) => {
	greeting += ` ${name}`;
	return greeting;
};
