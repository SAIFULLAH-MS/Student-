document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let project = document.getElementById("project").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name === "" || email === "" || department === "" || year === "" || project === "") {
        alert("All fields must be filled!");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Registration Successful");
    const savedDataDiv = document.getElementById("savedData");
    const entry = document.createElement("div");
    entry.classList.add("entry");
    entry.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Project:</strong> ${project}</p>
        <hr>
    `;
    savedDataDiv.appendChild(entry);

    document.getElementById("registrationForm").reset();
});
