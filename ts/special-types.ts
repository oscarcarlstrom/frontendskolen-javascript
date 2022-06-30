import { type } from "os";

// any
const isNumber = (str: any) => typeof str === "number";
isNumber(3); // true
isNumber("3"); // false
const anyInpuIsValid = (input: any) => input && input.length;

//unknown
const isString = (str: unknown) => typeof str === "string";
isString(3); // false
isString("3"); // true
const unknownInpuIsValid = (input: unknown) =>
	input && (input as string).length;

//never
const iIamNeverGoingToTerminate = () => {
	while (true) {
		console.log("Infinite loop in progress... please wait");
	}
};

const iThrowErrorsAllTheTime = () => {
	throw new Error("An error occurred!");
};

interface Obj1 {
	a: string;
	b?: never;
}

interface Obj2 {
	b: number;
	a?: never;
}

const fn = (obj: Obj1 | Obj2) =>
	obj.hasOwnProperty("a")
		? console.log("This is of type Obj1")
		: console.log("This is of type Obj2");

const myObj = { a: "foo", b: 123 };
fn(myObj);

const myObj1 = { a: "foo" };
fn(myObj1);

// Union types
type answer = "yes" | "no";
type answerTolerant = "yes" | "no" | true | false | 1 | 0;

type allowedPrimitives = string | number | boolean;
interface AllowedObject {
	[key: string]: allowedPrimitives;
}
type allowedValue =
	| allowedPrimitives
	| AllowedObject
	| (() => allowedPrimitives);

//Conditional types
type StringOrNot<T> = T extends string ? string : never;
type isNever = StringOrNot<0>;
type isString = StringOrNot<string>;
type isAloString = StringOrNot<"hello">;

type aOrBeReturnType<T extends Obj1 | Obj2> = (
	T: Obj1 | Obj2
) => T extends Obj1 ? string : number;
const aOrB: aOrBeReturnType<Obj1 | Obj2> = (obj: Obj1 | Obj2) =>
	obj.hasOwnProperty("a") ? (obj.a as string) : (obj.b as number);

aOrB(myObj1);

type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;

// Leaves the type alone.
type Num = Flatten<number>;

type FlattenWithInfer<Type> = Type extends Array<infer Item> ? Item : Type;

type inferredFlat1 = FlattenWithInfer<Obj1[]>;
type inferredFlat2 = FlattenWithInfer<Obj2>;
