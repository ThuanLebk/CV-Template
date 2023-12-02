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
    if (containerId === "tel-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('tel-container')">Add</button>
                <button onclick="deleteBox('tel-container')">Delete</button>
            </div>
            <div class="left">
            </div>
            <div class="right">
                <input type="tel" placeholder="0909888777" name="telNumber" id="telNumber" />
            </div>
        `;
    } else if (containerId === "email-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('email-container')">Add</button>
                <button onclick="deleteBox('email-container')">Delete</button>
            </div>
            <div class="left">
            </div>
            <div class="right">
                <input type="email" placeholder="abc@gmail.com" name="email" id="email" />
            </div>
        `;
    } else if (containerId === "address-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('address-container')">Add</button>
                <button onclick="deleteBox('address-container')">Delete</button>
            </div>
            <div class="left">
            </div>
            <div class="right">
                <textarea class="textarea-fullwidth" name="address" id="address" placeholder="117-119 Lý Chính Thắng, Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh"></textarea>
            </div>
        `;
    } else if (containerId === "education-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('education-container')">Add</button>
                <button onclick="deleteBox('education-container')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="From" name="" id=""></textarea>
                <span>_</span>
                <textarea placeholder="To" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="School name" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Profession/Courses" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Process and Achievements" name=""></textarea>
            </div>
        `;
    } else if (containerId === "experiences-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('experiences-container')">Add</button>
                <button onclick="deleteBox('experiences-container')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="From" name="" id=""></textarea>
                <span>_</span>
                <textarea placeholder="To" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Company name" name="" id=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Your job position" name="" id=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Experience description" name="" id=""></textarea>
            </div>
        `;
    } else if (containerId === "activities-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('activities-container')">Add</button>
                <button onclick="deleteBox('activities-container')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="From" name="" id=""></textarea>
                <span>_</span>
                <textarea placeholder="To" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Organization name" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Your position" name=""></textarea>
                <textarea class="textarea-fullwidth" placeholder="Activity description" name=""></textarea>
            </div>
        `;
    } else if (containerId === "certificates-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('certificates-container')">Add</button>
                <button onclick="deleteBox('certificates-container')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="Time" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Certificate name" name="" id=""></textarea>
            </div>
        `;
    } else if (containerId === "awards-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('awards-container')">Add</button>
                <button onclick="deleteBox('awards-container')">Delete</button>
            </div>
            <div class="time">
                <textarea placeholder="Time" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Award name" name="" id=""></textarea>
            </div>
        `;
    } else if (containerId === "skills-container") {
        newBox.innerHTML = `
            <div class="controls">
                <button onclick="addBox('skills-container')">Add</button>
                <button onclick="deleteBox('skills-container')">Delete</button>
            </div>
            <div class="skill-name">
                <textarea placeholder="Skill name" name="" id=""></textarea>
            </div>
            <div class="description">
                <textarea class="textarea-fullwidth" placeholder="Skill description" name="" id=""></textarea>
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
	controls.style.display = "block"; //controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
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
        <textarea class="textarea-fullwidth" placeholder="Project name" name="" id=""></textarea>

        <div class="box">
            <div class="time">
                <textarea placeholder="From" name="" id=""></textarea>
                <span>_</span>
                <textarea placeholder="To" name="" id=""></textarea>
            </div>
            <div class="description"></div>
        </div>
        <div class="table">
            <div class="table-row" id="project-customer">
                <div class="header-cell">
                    <span> Customer </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Name" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row" id="project-description">
                <div class="header-cell">
                <span> Description </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Description" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row" id="project-members">
                <div class="header-cell">
                    <span> Members </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Number of members" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row" id="project-position">
                <div class="header-cell">
                    <span> Position </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Position" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row" id="project-responsibilities">
                <div class="header-cell">
                    <span> Responsibilities </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Description" name="" id=""></textarea>
                </div>
            </div>
            <div class="table-row" id="project-technologies">
                <div class="header-cell">
                    <span> Technologies </span>
                </div>
                <div class="info-cell">
                    <textarea class="textarea-fullwidth" placeholder="Description" name="" id=""></textarea>
                </div>
            </div>
        </div>
    `;
	newBox.onclick = function () {
		const controls = this.querySelector(".controls");
		controls.style.display = "block"; //controls.style.display === "none" || controls.style.display === "" ? "block" : "none";
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
    checkPersonalInfoValidity();
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
	const data = extractFormData();
	console.log(JSON.stringify(data));

	// Use fetch API to make the POST request
	// fetch("test_server.php", {
	// 	method: "POST", // Specify the method
	// 	headers: {
	// 		// Specify any needed headers. This is how you tell the server you're sending JSON.
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
	// })
	// 	.then((response) => {
	// 		// The server responds with the data in JSON format, parse it to create a JavaScript object
	// 		if (!response.ok) {
	// 			// If the response has HTTP status code which is not successful, throw an error
	// 			throw new Error("Network response was not ok " + response.statusText);
	// 		}
	// 		return response.text(); // parses JSON response into native JavaScript objects
	// 	})
	// 	.then((data) => {
	// 		// Handle the response data
	// 		console.log("Success post:", data);
	// 	})
	// 	.catch((error) => {
	// 		// Handle any errors here
	// 		console.error("Error:", error);
	// 	});
};

function checkPersonalInfoValidity() {
    // Check the validity of each personal info input
    const cvNameValid = document.getElementById('cvName').checkValidity();
    if (!cvNameValid) {
        document.getElementById('errorMessageCVName').textContent ='Please fill into this field';
        document.getElementById('cvName').style.border = '1px solid red';
        document.getElementById('cvName').onclick = function () {
            document.getElementById('cvName').style.border = 'none';
        }
    }
    const nameValid = document.getElementById('nameInput').checkValidity();
    if (!nameValid) {
        document.getElementById('errorMessageName').textContent ='Please fill into this field';
        document.getElementById('nameInput').style.border = '1px solid red';
        document.getElementById('nameInput').onclick = function () {
            document.getElementById('nameInput').style.border = 'none';
        }
    }
    //const positionValid = document.getElementById('positionInput').checkValidity();
    const birthDateValid = document.getElementById('birthDate').checkValidity();
    if (!birthDateValid) {
        document.getElementById('errorMessageBirthDate').textContent ='Please fill into this field';
        document.getElementById('birthDate').style.border = '1px solid red';
        document.getElementById('birthDate').onclick = function () {
            document.getElementById('birthDate').style.border = 'none';
        }
    }
    const genderValid = document.getElementById('gender').checkValidity();
    if (!genderValid) {
        document.getElementById('errorMessageGender').textContent ='Please fill into this field';
        document.getElementById('gender').style.border = '1px solid red';
        document.getElementById('gender').onclick = function () {
            document.getElementById('gender').style.border = 'none';
        }
    }
    const telNumberValid = document.getElementById('telNumber').checkValidity();
    if (!telNumberValid) {
        document.getElementById('errorMessageTel').textContent ='Please fill into this field';
        document.getElementById('telNumber').style.border = '1px solid red';
        document.getElementById('telNumber').onclick = function () {
            document.getElementById('telNumber').style.border = 'none';
        }
    }
    const emailValid = document.getElementById('email').checkValidity();
    if (!emailValid) {
        document.getElementById('errorMessageEmail').textContent ='Please fill into this field';
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').onclick = function () {
            document.getElementById('email').style.border = 'none';
        }
    }
    const addressValid = document.getElementById('address').checkValidity();
    if (!addressValid) {
        document.getElementById('errorMessageAddress').textContent ='Please fill into this field';
        document.getElementById('address').style.border = '1px solid red';
        document.getElementById('address').onclick = function () {
            document.getElementById('address').style.border = 'none';
        }
    }
}

function extractFormData() {
    const data = {
        cvName: document.getElementById('cvName').value,
        personalInfo: extractPersonalInfo(),
        objective: document.querySelector('.objective textarea').value,
        education: extractSectionData('education-container'),
        experiences: extractSectionData('experiences-container'),
        activities: extractSectionData('activities-container'),
        certificates: extractSectionData('certificates-container'),
        awards: extractSectionData('awards-container'),
        skills: extractSkillsData(),
        hobbies: document.querySelector('.hobbies textarea').value,
        misc: document.querySelector('.misc textarea').value,
        projects: extractProjectData(),
    };

    // Perform further actions with the extracted data as needed
    return data;
}

function extractPersonalInfo() {
    const personalInfo = {
        name: document.getElementById('nameInput').value,
        position: document.getElementById('positionInput').value,
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

function extractSkillsData() {
    const container = document.getElementById('skills-container');
    const boxes = container.querySelectorAll('.box');
    const skillsData = [];

    boxes.forEach(box => {
        const skillName = box.querySelector('.skill-name textarea').value;
        const description = box.querySelector('.description textarea').value;

        const skillEntry = {
            name: skillName,
            description: description,
        };

        skillsData.push(skillEntry);
    });

    return skillsData;
}

function extractProjectData() {
    const projectContainer = document.getElementById('project-details');
    const projectBoxes = projectContainer.querySelectorAll('.project');
    const projects = [];

    projectBoxes.forEach(projectBox => {
        const projectTitle = projectBox.children[0].value;
        const timeFields = projectBox.querySelectorAll('.time textarea');
        
        const projectData = {
            title: projectTitle,
            time: Array.from(timeFields).map(field => field.value),
            tableData: {},
        };

        // Iterate over each table row and extract data
        const rows = projectBox.querySelectorAll('.table-row');
        rows.forEach(row => {
            const headerCell = row.querySelector('.header-cell');
            const infoCell = row.querySelector('.info-cell textarea');
            
            // Use the content of the header cell as the key in tableData
            const header = headerCell.innerText.trim();
            // Use the content of the info cell as the value in tableData
            const info = infoCell.value;
            
            // Assign key-value pair to tableData
            projectData.tableData[header] = info;
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

function populateForm(data) {
    // Populate personal information
    document.getElementById('cvName').value = data.cvName;
    document.getElementById('nameInput').value = data.personalInfo.name;
    document.getElementById('positionInput').value = data.personalInfo.position;
    document.getElementById('birthDate').value = data.personalInfo.birthDate;
    document.getElementById('gender').value = data.personalInfo.gender;
    document.getElementById('telNumber').value = data.personalInfo.telNumber;
    document.getElementById('email').value = data.personalInfo.email;
    document.getElementById('address').value = data.personalInfo.address;

    // Populate objective
    document.querySelector('.objective textarea').value = data.objective;

    // Populate sections (education, experiences, activities, certificates, awards, skills)
    populateSection('education-container', data.education);
    populateSection('experiences-container', data.experiences);
    populateSection('activities-container', data.activities);
    populateSection('certificates-container', data.certificates);
    populateSection('awards-container', data.awards);
    populateSkills('skills-container', data.skills);

    // Populate hobbies and misc
    document.querySelector('.hobbies textarea').value = data.hobbies;
    document.querySelector('.misc textarea').value = data.misc;

    // Populate projects
    populateProjects('project-details', data.projects);
}

function populateSection(containerId, sectionData) {
    const container = document.getElementById(containerId);
    
    // Check if sectionData is defined and is an array
    if (sectionData && Array.isArray(sectionData)) {
        sectionData.forEach(entry => {
            const newBox = document.createElement("div");
            newBox.className = "box";

            // Your existing code to populate newBox based on entry

            container.appendChild(newBox);
        });
    } else {
        console.error(`Invalid or missing sectionData for containerId: ${containerId}`);
    }
}

function populateSkills(containerId, skillsData) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content

    skillsData.forEach(skillEntry => {
        addBox(containerId); // Add a new box
        const boxes = container.querySelectorAll('.box');
        const newBox = boxes[boxes.length - 1];

        newBox.querySelector('.skill-name textarea').value = skillEntry.name;
        newBox.querySelector('.description textarea').value = skillEntry.description;
    });
}

function populateProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear existing content

    projects.forEach(projectData => {
        addProject(); // Add a new project box
        const projectBoxes = container.querySelectorAll('.project');
        const newProjectBox = projectBoxes[projectBoxes.length - 1];

        newProjectBox.children[0].value = projectData.title;

        const timeFields = newProjectBox.querySelectorAll('.time textarea');
        projectData.time.forEach((value, index) => {
            timeFields[index].value = value;
        });

        // Iterate over each table row and populate data
        const rows = newProjectBox.querySelectorAll('.table-row');
        rows.forEach(row => {
            const headerCell = row.querySelector('.header-cell');
            const infoCell = row.querySelector('.info-cell textarea');
            const header = headerCell.innerText.trim();

            if (projectData.tableData.hasOwnProperty(header)) {
                infoCell.value = projectData.tableData[header];
            }
        });
    });
}
// Mock data in JSON format
const mockData = {
    cvName: "John Doe's CV",
    personalInfo: {
        name: "John Doe",
        position: "Software Developer",
        birthDate: "1990-01-01",
        gender: "Male",
        telNumber: "1234567890",
        email: "john.doe@example.com",
        address: "123 Main St, Cityville",
    },
    objective: "Seeking a challenging position in software development.",
    education: [
        { time: ["2010", "2014"], description: ["BSc in Computer Science", "University of Tech"] },
        // Add more education entries if needed
    ],
    experiences: [
        { time: ["2015", "2018"], description: ["Software Engineer", "Tech Company"] },
        // Add more experience entries if needed
    ],
    // Add more sections with mock data as needed
    // ...
    skills: [
        { name: "JavaScript", description: "Frontend and backend development" },
        // Add more skill entries if needed
    ],
    hobbies: "Reading, hiking, coding",
    misc: "Additional information about John Doe",
    projects: [
        {
            title: "Project ABC",
            time: ["2018", "2020"],
            tableData: {
                "Customer": "ABC Corp",
                "Description": "Developed a web application for internal use",
                // Add more table data entries if needed
            },
        },
        // Add more project entries if needed
    ],
};

//populateForm(mockData);