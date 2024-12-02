const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const slider = document.querySelector("input[type='range']");

const acceptedKeys = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0",
	"+",
	"*",
	"/",
	".",
];

for (let button of buttons) {
	button.addEventListener("click", () => {
		switch (button.innerText) {
			case "=":
				let resultValue = "";

				try {
					resultValue = eval(result.innerText);
				} catch {
					result.innerText = "ERROR";
				}

				if (isNaN(resultValue)) result.innerText = "ERROR";
				else result.innerText = resultValue;
				break;
			case "RESET":
				result.innerText = "";
				break;
			case "DEL":
				result.innerText = result.innerText.slice(0, -1);
				break;

			default:
				result.innerText += button.innerText;
				break;
		}
	});
}

addEventListener("keydown", (e) => {
	console.log(e.key);
	if (acceptedKeys.includes(e.key)) result.innerText += e.key;
});
