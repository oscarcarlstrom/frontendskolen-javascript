let n = 0;
n = 2;

let n2: number = 0;
n2 = 2;

let n3: number;
n3 = 2;

const n4 = 0;

const n5 = 0 as number;

let maybeUndefined: undefined | string;
maybeUndefined = "hello!";

const sayHello = (maybeUndefinedParam?: string) =>
	console.log(maybeUndefinedParam);

const truthy = maybeUndefined.length;
const logIf = (condition: boolean) =>
	condition && console.log("Yeah, the condition is met!");

logIf();
logIf(maybeUndefined);
logIf(!!maybeUndefined);
logIf(Boolean(maybeUndefined));
logIf(maybeUndefined as unknown as boolean);

const element = document.querySelector("#some-id");
element?.setAttribute("aria-label", "hello ARIA!");
