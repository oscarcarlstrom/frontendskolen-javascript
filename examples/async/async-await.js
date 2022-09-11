function doSomethingAsync() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved some async stuff!");
		}, 300);
	});
}

const resolved = doSomethingAsync();
// const resolved = await doSomethingAsync(); // SyntaxError: await is only valid in async functions and the top level bodies of modules - top level await will be great 🙌
console.log(resolved); // Promise { <pending> }

async function runAsync() {
	const resolved = await doSomethingAsync();
	console.log(resolved);
}

runAsync(); // resolved some async stuff!

function getVeryUnreliablePromise() {
	return new Promise((resolve, reject) => {
		Math.random() < 0.2
			? resolve("Resolved without error!")
			: reject("There was an error!");
	});
}

// (async function runUnreliableAsync() {
// 	const unreliableStuff = await getVeryUnreliablePromise(); // UnhandledPromiseRejection
// 	console.log(unreliableStuff);
// })();

(async function runUnreliableAsyncWithTryCatch() {
	try {
		const unreliableStuff = await getVeryUnreliablePromise(); // UnhandledPromiseRejection
		console.log(unreliableStuff);
	} catch (exception) {
		console.log(`An error occurred: ${exception}`);
	}
})();

(async function fetchGitRepos() {
	let response;
	let requestDone = false;
	try {
		response = await fetch(
			"https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10"
		);
	} catch (exception) {
		console.log("An error occurred!");
		response = exception;
	} finally {
		requestDone = true;
	}
	console.log(response);
})();
