const hi = (name: string) => console.log(`Hello ${name}!`);
hi(0);
hi("0");

["Carl", "Oscar", "Fredrik"].forEach((name) => console.log(`Hello ${name}!`));

const hi2 = (name: string): void => console.log(`Hello ${name}!`);
function hi3(name: string): void {
	console.log(`Hello ${name}!`);
}
const hi4 = function (name: string): void {
	console.log(`Hello ${name}!`);
};

const hiPhrase = (name: string) => `Hello ${name}!`;
const hiPhrase2 = (name: string): string => `Hello ${name}!`;
function hiPhrase3(name: string): string {
	return `Hello ${name}!`;
}
const hiPhrase4 = function (name: string): string {
	return `Hello ${name}!`;
};

const hiName = (firstName: string, lastName?: string) =>
	`Hello ${`${firstName} ${lastName ?? ""}.trim()!`}`;

const hiNameDefaultLastname = (firstName: string, lastName = "") =>
	`Hello ${`${firstName} ${lastName}.trim()`}!`;
