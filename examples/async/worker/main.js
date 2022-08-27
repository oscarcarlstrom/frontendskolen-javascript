const workerOutputEl = document.querySelector("#worker-out");

if (window.Worker) {
	const myWorker = new Worker("worker.js");

	myWorker.postMessage("Hello worker!");

	myWorker.onmessage = (e) => {
		workerOutputEl.textContent = `Received message from worker: ${e.data}`;
	};
} else {
	console.log("Your browser doesn't support web workers.");
}
