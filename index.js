const alternativeInput = document.querySelector("#alternativeInput");
const defaultInput = document.querySelector("#defaultInput");

alternativeInput.onclick = (e) => defaultInput.click();

const textArea = document.querySelectorAll("textarea");

textArea.forEach((text) => {
	text.onkeyup = (e) => {
		if (text.value.length === 0)
			text.style.height = "30px";
		let scrHeight = e.target.scrollHeight;
		text.style.height = `${scrHeight}px`;
	};
});
