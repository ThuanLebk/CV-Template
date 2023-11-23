const alternativeInput = document.querySelector("#alternativeInput");
const defaultInput = document.querySelector("#defaultInput");
const avatar = document.querySelector("#avatar");
const imgChangeNoti = document.querySelector("#imgChangeNoti");
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

// update avatar for the input image
defaultInput.onchange = (e) => {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onloadend = () => {
		avatar.src = reader.result;
	};
}

// show notification when hover on avatar
avatar.onmouseover = (e) => {
	imgChangeNoti.style.display = "block";
}

avatar.onmouseout = (e) => {
	imgChangeNoti.style.display = "none";
}