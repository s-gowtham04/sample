window.onload = function() {
    alert("Welcome to the Skills Test!");
    updateStudentCount();
    displaySavedData();
};

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("addStudentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("newName").value;
    const age = document.getElementById("newAge").value;
    const skill = document.getElementById("newSkill").value;

    if (name && age && skill) {
        const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = age;
        newRow.insertCell(2).innerText = skill;
        updateStudentCount();
        this.reset();
    }
});

function updateStudentCount() {
    const count = document.querySelectorAll("#studentTable tbody tr").length;
    document.getElementById("studentCount").innerText = count;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.innerText = "Form submitted successfully!";
        localStorage.setItem("formData", JSON.stringify({ name, email, message }));
        displaySavedData();
        this.reset();
    }
});

function displaySavedData() {
    let saved = localStorage.getItem("formData");
    if (saved) {
        let data = JSON.parse(saved);
        document.getElementById("dataDisplay").innerHTML = `
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
        `;
    }
}
