onmessage = (e) => {
	console.log(`Received message from main: ${e.data}`);
	setTimeout(() => postMessage("Hello main!"), 2000);
};
