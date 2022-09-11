const person = {
	name: "Oscar",
};

console.log(person.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype === Object.prototype); // true (obvs)

console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function.prototype.constructor === Function); // true

console.log(Function.prototype.__proto__ === Object.prototype); // true
