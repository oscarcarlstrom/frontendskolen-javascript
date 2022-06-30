const fruits = ["Apple", "Orange", "Banana"];
const orange = fruits.find((fruit) => fruit === "Orange");

const anyApples = fruits.some((fruit) => fruit === "Apple");

const cars = [
	{ brand: "Volvo", color: "Red" },
	{ brand: "Toyota", color: "White" },
	{ brand: "BMW", color: "Black" },
];
const toyota = cars.find(({ brand }) => brand === "Toyota");

fruits.push("Pinapple");
const fruits1: ReadonlyArray<string> = ["Orange", "Apple"];
fruits1.push("Pinapple");
const fruits2: readonly string[] = ["Orange", "Apple"];
fruits2.push("Pinapple");

type customHookReturnType = [string, (newValue: string) => void];
function customHook(initalValue: string): customHookReturnType {
	let value = initalValue;
	function setValue(newValue: string) {
		value = newValue;
	}
	return [value, setValue];
}
const [value, setValue] = customHook("hello world!");

const foo = ([x, y]: readonly [number, number]) => x * y;
