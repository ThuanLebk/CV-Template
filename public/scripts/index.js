const alternativeInput = document.querySelector("#alternativeInput");
const defaultInput = document.querySelector("#defaultInput");
const avatar = document.querySelector("#avatar");
const imgChangeNoti = document.querySelector("#imgChangeNoti");
// Thuan add two buttons
const saveBtn = document.querySelector("#saveBtn");
const loadBtn = document.querySelector("#loadBtn");
//--------------
alternativeInput.onclick = (e) => defaultInput.click();

const textArea = document.querySelectorAll("textarea");

textArea.forEach((text) => {
	text.onkeyup = (e) => {
		if (text.value.length === 0) text.style.height = "30px";
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
};

// show notification when hover on avatar

avatar.addEventListener("mouseenter", function () {
	avatar.style.border = "2px solid #4CAF50"; // Add a border
	avatar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"; // Add a box shadow
});

avatar.addEventListener("mouseleave", function () {
	avatar.style.border = "none";
	avatar.style.boxShadow = "none";
});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	// box.onfocus = function () {
	//     box.style.border = '2px solid #ccc';
	//     const controls = this.querySelector('.controls');
	//     controls.style.display = 'block';
	// }

	// box.onblur= function () {
	//     box.style.border = "none";
	//     const controls = this.querySelector('.controls');
	//     controls.style.display = 'none';
	// }

	box.onclick = function () {
		const controls = this.querySelector(".controls");
		if (controls !== null) controls.style.display = 'block'; //= controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
	};
});

function addBox(containerId) {
	var boxContainer = document.getElementById(containerId);
	var newBox = document.createElement("div");
	newBox.className = "box";

	// Similar structure as your initial box

	if (containerId === "certificates-container" || containerId === "awards-container") {
		newBox.innerHTML = `
            <div class="controls">
                <button class="add-button" onclick="addBox('${containerId}')">Add</button>
                <button class="delete-button" onclick="deleteBox('${containerId}')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="Job objective" name=""></textarea>
                <span>_</span>
                <textarea placeholder="Job objective" name=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Job objective" name=""></textarea>
            </div>
        `;
	} else {
		newBox.innerHTML = `
            <div class="controls">
                <button class="add-button" onclick="addBox('${containerId}')">Add</button>
                <button class="delete-button" onclick="deleteBox('${containerId}')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="Job objective" name=""></textarea>
                <span>_</span>
                <textarea placeholder="Job objective" name=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Job objective" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Job objective" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Job objective" name=""></textarea>
            </div>
        `;
	}

	newBox.onclick = function () {
		const controls = this.querySelector(".controls");
		controls.style.display = 'block';//controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
	};

	boxContainer.appendChild(newBox);
}

function deleteBox(containerId) {
	var boxContainer = document.getElementById(containerId);
	var boxes = boxContainer.getElementsByClassName("box");

	// Check if there is at least one box left before removing
	if (boxes.length > 1) {
		boxContainer.removeChild(boxes[boxes.length - 1]);
		updateButtons(containerId);
	}
}

// function updateButtons(containerId) {
//     var boxContainer = document.getElementById(containerId);
//     var boxes = boxContainer.getElementsByClassName('box');
//     var controls = boxContainer.querySelector('.controls');

//     // Hide buttons if no boxes are present
//     controls.style.display = boxes.length > 0 ? 'block' : 'none';
// }
const project = document.querySelector(".project");

project.onclick = function () {
	const controls = this.querySelector(".controls");
	controls.style.display = controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
};

function addProject() {
	var boxContainer = document.getElementById("project-details");
	var newBox = document.createElement("div");
	newBox.className = "project";

	newBox.innerHTML = `
        <div class="controls">
            <button onclick="addProject()">Add</button>
            <button onclick="deleteProject()">Delete</button>
        </div>
        <textarea class="textarea-fullwidth" placeholder="Job objective" name="" id=""></textarea>

        <div class="box">
            <div class="time">
                <textarea placeholder="Job objective" name="" id=""></textarea>
                <span>_</span>
                <textarea placeholder="Job objective" name="" id=""></textarea>
            </div>
            <div class="description"></div>
        </div>
        <div class="table">
            <div class="table-row">
                <div class="header-cell">
                    <textarea placeholder="Khach hang" name="" id=""></textarea>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Ten khach hang" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row">
                <div class="header-cell">
                    <textarea placeholder="Khach hang" name="" id=""></textarea>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Ten khach hang" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row">
                <div class="header-cell">
                    <textarea placeholder="Khach hang" name="" id=""></textarea>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Ten khach hang" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row">
                <div class="header-cell">
                    <textarea placeholder="Khach hang" name="" id=""></textarea>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Ten khach hang" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row">
                <div class="header-cell">
                    <textarea placeholder="Khach hang" name="" id=""></textarea>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Ten khach hang" name="" id=""></textarea>
                </div>
            </div>
        </div>
    `;
	newBox.onclick = function () {
		const controls = this.querySelector(".controls");
		controls.style.display = controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
	};

	boxContainer.appendChild(newBox);

	return;
}

function deleteProject() {
	var boxContainer = document.getElementById("project-details");
	var boxes = boxContainer.getElementsByClassName("project");

	// Check if there is at least one box left before removing
	if (boxes.length > 1) {
		boxContainer.removeChild(boxes[boxes.length - 1]);
		updateButtons(containerId);
	}
}

// make controls disappear when click outside
document.onclick = function (e) {
	const boxes = document.querySelectorAll(".box");
	const projects = document.querySelectorAll(".project");
	boxes.forEach((box) => {
		const controls = box.querySelector(".controls");
		if (controls !== null && !box.contains(e.target)) {
			controls.style.display = "none";
		}
	});
	projects.forEach((project) => {
		const controls = project.querySelector(".controls");
		if (controls !== null && !project.contains(e.target)) {
			controls.style.display = "none";
		}
	});
};

//Thuan adds event handler for two buttons: save and load
//on click save button
saveBtn.onclick = (e) => {
	// Define the URL of the server endpoint
	// Create the data object you want to send
	// const data = {
	// 	key1: "value1",
	// 	key2: "value2",
	// };


	// // Get all input and textarea elements
	// const inputElements = document.querySelectorAll('input, textarea');

	// // Iterate through each element and add its value to the data object
	// inputElements.forEach(function (element) {
	// 	// Check if the element has an ID and is not the file input
		
	// 	if (element.id && element.type !== 'file') {
	// 		// Add the element's value to the data object using its ID as the key
	// 		data[element.id] = element.value;

	// 	}
	// });
	const data = extractData();
	console.log(JSON.stringify(data));
	// Use fetch API to make the POST request
	fetch("test_server.php", {
		method: "POST", // Specify the method
		headers: {
			// Specify any needed headers. This is how you tell the server you're sending JSON.
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
	})
		.then((response) => {
			// The server responds with the data in JSON format, parse it to create a JavaScript object
			if (!response.ok) {
				// If the response has HTTP status code which is not successful, throw an error
				throw new Error("Network response was not ok " + response.statusText);
			}
			return response.text(); // parses JSON response into native JavaScript objects
		})
		.then((data) => {
			// Handle the response data
			console.log("Success post:", data);
		})
		.catch((error) => {
			// Handle any errors here
			console.error("Error:", error);
		});
};

function extractData() {
    const data = {
        personalInfo: extractPersonalInfo(),
        objective: document.querySelector('.objective textarea').value,
        education: extractSectionData('education-container'),
        experiences: extractSectionData('experiences-container'),
        activities: extractSectionData('activities-container'),
        certificates: extractSectionData('certificates-container'),
        awards: extractSectionData('awards-container'),
        skills: extractSectionData('skills-container'),
        hobbies: document.querySelector('.hobbies textarea').value,
        misc: document.querySelector('.misc textarea').value,
        reference: document.querySelector('.Reference textarea').value,
        projects: extractProjectData(),
    };

    console.log(data);
    // Perform further actions with the extracted data as needed
	return data;
}

function extractPersonalInfo() {
    const personalInfo = {
        name: document.querySelector('.header h1').textContent,
        position: document.querySelector('.header p').textContent,
        birthDate: document.getElementById('birthDate').value,
        gender: document.getElementById('gender').value,
        telNumber: document.getElementById('telNumber').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
    };

    return personalInfo;
}

function extractSectionData(containerId) {
    const container = document.getElementById(containerId);
    const boxes = container.querySelectorAll('.box');
    const sectionData = [];

    boxes.forEach(box => {
        const timeFields = box.querySelectorAll('.time textarea');
        const descriptionFields = box.querySelectorAll('.description textarea');

        const entry = {
            time: Array.from(timeFields).map(field => field.value),
            description: Array.from(descriptionFields).map(field => field.value),
        };

        sectionData.push(entry);
    });

    return sectionData;
}

function extractProjectData() {
    const projectContainer = document.getElementById('project-details');
    const projectBoxes = projectContainer.querySelectorAll('.project');
    const projects = [];

    projectBoxes.forEach(projectBox => {
        const projectTitle = projectBox.querySelector('.textarea-fullwidth').value;
        const timeFields = projectBox.querySelectorAll('.time textarea');
        const headerCells = projectBox.querySelectorAll('.header-cell textarea');
        const infoCells = projectBox.querySelectorAll('.info-cell textarea');

        const projectData = {
            title: projectTitle,
            time: Array.from(timeFields).map(field => field.value),
            tableData: [],
        };

        headerCells.forEach((header, index) => {
            const info = infoCells[index].value;
            projectData.tableData.push({ [header.value]: info });
        });

        projects.push(projectData);
    });

    return projects;
}

loadBtn.onclick = (e) => {
	// Define the URL of the server endpoint
	const userId = 1;
    const cvId = 14;
    const url = `test_server.php?user_id=${userId}&cv_id=${cvId}`;


	// Use fetch API to make the GET request
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				// If the response has an HTTP status code which is not successful, throw an error
				throw new Error("Network response was not ok: " + response.statusText);
			}
			return response.text(); // parses JSON response into native JavaScript objects
		})
		.then((data) => {
			// Handle the response data
            const loadedData = JSON.parse(data);

            // Populate the form with the loaded data
            populateForm(loadedData);

			// Handle the response data
			console.log("Success:", JSON.parse(data));
			console.log("Success:", JSON.parse(data).key);
		})
		.catch((error) => {
			// Handle any errors here
			console.error("Error:", error);
		});
};

// Function to populate the form with loaded data
function populateForm(data) {
    // Personal Information
    document.querySelector('.header h1').textContent = data.personalInfo.name;
    document.querySelector('.header p').textContent = data.personalInfo.position;
    document.getElementById('birthDate').value = data.personalInfo.birthDate;
    document.getElementById('gender').value = data.personalInfo.gender;
    document.getElementById('telNumber').value = data.personalInfo.telNumber;
    document.getElementById('email').value = data.personalInfo.email;
    document.getElementById('address').value = data.personalInfo.address;

    // Objective
    document.querySelector('.objective textarea').value = data.objective;

    // Other sections - call respective functions to populate data
    populateSectionData('education-container', data.education);
    populateSectionData('experiences-container', data.experiences);
    populateSectionData('activities-container', data.activities);
    populateSectionData('certificates-container', data.certificates);
    populateSectionData('awards-container', data.awards);
    populateSectionData('skills-container', data.skills);

    // Hobbies
    document.querySelector('.hobbies textarea').value = data.hobbies;

    // Misc
    document.querySelector('.misc textarea').value = data.misc;

    // Reference
    document.querySelector('.Reference textarea').value = data.reference;

    // Projects
    populateProjectData(data.projects);
}

function populateSectionData(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content

    data.forEach(entry => {
        const box = document.createElement('div');
        box.classList.add('box');

        // Populate time fields
        const time = document.createElement('div');
        time.classList.add('time');
        entry.time.forEach(timeValue => {
            const timeTextarea = document.createElement('textarea');
            timeTextarea.placeholder = 'Job objective';
            timeTextarea.value = timeValue;
            time.appendChild(timeTextarea);
        });
        box.appendChild(time);

        // Populate description fields
        const description = document.createElement('div');
        description.classList.add('description');
        entry.description.forEach(descriptionValue => {
            const descriptionTextarea = document.createElement('textarea');
            descriptionTextarea.classList.add('textarea-fullwidth');
            descriptionTextarea.placeholder = 'Job objective';
            descriptionTextarea.value = descriptionValue;
            description.appendChild(descriptionTextarea);
        });
        box.appendChild(description);

        container.appendChild(box);
    });
}

function populateProjectData(data) {
    const projectContainer = document.getElementById('project-details');
    projectContainer.innerHTML = ''; // Clear existing content

    data.forEach(projectData => {
        const project = document.createElement('div');
        project.classList.add('project');

        // Populate project title
        const projectTitleTextarea = document.createElement('textarea');
        projectTitleTextarea.classList.add('textarea-fullwidth');
        projectTitleTextarea.placeholder = 'Job objective';
        projectTitleTextarea.value = projectData.title;
        project.appendChild(projectTitleTextarea);

        // Populate time fields
        const time = document.createElement('div');
        time.classList.add('time');
        projectData.time.forEach(timeValue => {
            const timeTextarea = document.createElement('textarea');
            timeTextarea.placeholder = 'Job objective';
            timeTextarea.value = timeValue;
            time.appendChild(timeTextarea);
        });
        project.appendChild(time);

        // Populate description field
        const description = document.createElement('div');
        description.classList.add('description');
        project.appendChild(description);

        // Populate table data
        const table = document.createElement('div');
        table.classList.add('table');
        projectData.tableData.forEach(tableRowData => {
            const tableRow = document.createElement('div');
            tableRow.classList.add('table-row');

            for (const [header, info] of Object.entries(tableRowData)) {
                const headerCellTextarea = document.createElement('textarea');
                headerCellTextarea.placeholder = 'Khach hang';
                headerCellTextarea.value = header;
                tableRow.appendChild(headerCellTextarea);

                const infoCellTextarea = document.createElement('textarea');
                infoCellTextarea.classList.add('textarea-fullwidth');
                infoCellTextarea.placeholder = 'Ten khach hang';
                infoCellTextarea.value = info;
                tableRow.appendChild(infoCellTextarea);
            }

            table.appendChild(tableRow);
        });
        project.appendChild(table);

        projectContainer.appendChild(project);
    });
}