const myPromise = new Promise((resolve) => {
	resolve("resolved!");
});

myPromise.then((result) => console.log(result)); // resolved!

function doSomethingAsync() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved some async stuff!");
		}, 300);
	});
}

doSomethingAsync().then((result) => console.log(result)); // "resolved some async stuff!" (after about 300 ms)

function getUnreliablePromise() {
	return new Promise((resolve, reject) => {
		Math.random() < 0.5
			? resolve("Resolved without error!")
			: reject("There was an error!");
	});
}

for (let i = 0; i < 10; i++) {
	getUnreliablePromise()
		.then((result) => console.log(result))
		.catch((error) => console.log(error));
}

for (let i = 0; i < 10; i++) {
	getUnreliablePromise()
		.then((result) => console.log(result))
		.catch((error) => console.log(error))
		.finally(() => console.log(`Finally, we are done with this promise!`));
}

let requestDone = false;
fetch(
	"https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10"
)
	.then((response) => response.json())
	.then((json) => console.log(json))
	.catch((error) => console.log(`Something went wrong: ${error}`))
	.finally(() => {
		requestDone = true;
	});
