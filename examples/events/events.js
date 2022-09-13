const nameInput = document.querySelector("#input-name");
nameInput.addEventListener("change", (event) => {
	console.log(`Value is "${event.target.value}"`);
});
nameInput.addEventListener("keydown", (event) => {
	console.log(`Pressed "${event.key}"`);
});

const tableBody = document.querySelector("#table-body");

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Note: prevents page reload on form submit

	const newRow = document.createElement("tr");
	tableBody.appendChild(newRow);
	// Note this event listener
	newRow.addEventListener("click", () => {
		alert("You just clicked a user you maniac!");
	});

	const td1 = document.createElement("td");
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("checked", "true");

	const label = document.createElement("label");
	label.setAttribute("aria-label", "Enable/disable");
	label.appendChild(checkbox);
	label.appendChild(document.createElement("span"));
	label.classList.add("toggle-switch");
	label.addEventListener("click", (e) => {
		// Beware the event "bubbling"! -> note that it has to be a click event, "change" won't bubble in this case!
		// Also notice that without stopPropagation() we get the alert from the newRow event listener twice, due to the event bubbling
		e.stopPropagation();

		console.log(
			`${nameInput.value} was ${e.target.checked ? "enabled" : "disabled"}`
		);
	});
	td1.appendChild(label);
	newRow.appendChild(td1);

	const td2 = document.createElement("td");
	td2.textContent = nameInput.value;
	newRow.appendChild(td2);
	nameInput.value = "";

	const td3 = document.createElement("td");
	const mailInput = document.querySelector("#input-mail");
	const link = document.createElement("a");
	link.textContent = mailInput.value;
	link.href = `mailto:${mailInput.value}`;
	td3.appendChild(link);
	newRow.appendChild(td3);
	mailInput.value = "";
});

window.addEventListener("resize", () => {
	console.log("Resize!");
});

function debounce(callback, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(args);
		}, timeout);
	};
}

const debounceDelay = 1000;
window.addEventListener(
	"resize",
	debounce(() => {
		console.log(
			`Debounced resize: user stopped resizing for ${debounceDelay} ms`
		);
	}, debounceDelay)
);

function throttle(callback, delay) {
	let timer = null;
	return function () {
		if (timer === null) {
			timer = setTimeout(function () {
				callback();
				timer = null;
			}, delay);
		}
	};
}

const thottleDelay = 1000;
window.addEventListener(
	"resize",
	throttle(() => {
		console.log(
			`Throttled resize: this will happen every ${thottleDelay} ms unitl the user stops resizing`
		);
	}, thottleDelay)
);
