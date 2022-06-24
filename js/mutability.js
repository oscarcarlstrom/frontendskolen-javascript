const text = "my text";
// text = "my new text"; // TypeError: Assignment to constant variable.

let text2 = "my text";
text2 += " 2!";
console.log(text2); // Here text2 will get a brand new value, the old one is completely wiped

const myObject = { a: 1 };
myObject.b = 2; // This is valid because objects are mutables!
console.log(myObject);

const myArray = [1];
myArray[1] = 2; // This is valid because arrays (objects) are mutables!
console.log(myArray);
