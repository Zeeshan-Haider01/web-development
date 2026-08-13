// let names = ["ali", "hamza" , "qavi"]

// names.forEach(function (elements){
//     console.log(elements)
// })

const students = [];

const form = document.getElementById("studentForm");
form.addEventListener("submit", function (event) {
    // Prevent page refresh
    event.preventDefault();
    // Get input fields
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const course = document.getElementById("course");
    const address = document.getElementById("address");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    // Get error messages
    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
    const courseError = document.getElementById("courseError");
    const addressError = document.getElementById("addressError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    let isValid = true;
    // Remove previous errors
    document.querySelectorAll(".error-message").forEach(function (error) { 
        error.classList.remove("show"); 
    });

    document.querySelectorAll("input, select, textarea").forEach(function (field) {
        field.classList.remove("error"); 
    });
    successMessage.textContent = "";
    // Full Name Validation
    if (fullName.value.trim() === "") {
        fullName.classList.add("error");
        fullNameError.classList.add("show");
        isValid = false;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
        email.classList.add("error");
        emailError.classList.add("show");
        isValid = false;
    }

    // Phone Validation

    const phonePattern = /^[0-9]{10,15}$/;
    if (phone.value.trim() === "" || !phonePattern.test(phone.value.trim()) ) {
        phone.classList.add("error");
        phoneError.classList.add("show");
        isValid = false;
    }
    // Date of Birth Validation
    if (dob.value === "") {
        dob.classList.add("error");
        dobError.classList.add("show");
        isValid = false;
    }
    // Gender Validation

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        genderError.classList.add("show");
        isValid = false;
    }

    // Course Validation
    if (course.value === "") {
        course.classList.add("error");
        courseError.classList.add("show");
        isValid = false;
    }

    // Address Validation
    if (address.value.trim() === "") {
        address.classList.add("error");
        addressError.classList.add("show");
        isValid = false;
    }

    // Password Validation
    if (password.value.length < 8) {
        password.classList.add("error");
        passwordError.classList.add("show");
        isValid = false;
    }

    // Confirm Password

    if (confirmPassword.value === "" || confirmPassword.value !== password.value ) {
        confirmPassword.classList.add("error");
        confirmPasswordError.classList.add("show");
        isValid = false;
    }

    // Final Result

    if (isValid) {
        const student = {
            fullName: fullName.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            dob: dob.value,
            gender: selectedGender.value,
            course: course.value,
            address: address.value.trim(),
            password: password.value
        };
        students.push(student);
        console.log(students);
        successMessage.textContent = "Student registration successful!";
        displayStudents();
        // Reset form
        form.reset();
    }

});

function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    students.forEach(function(student) {
        studentList.innerHTML += `
            <div class="student">
                <h3>${student.fullName}</h3>
                <p>Email: ${student.email}</p>
                <p>Phone: ${student.phone}</p>
                <p>Date of Birth: ${student.dob}</p>
                <p>Gender: ${student.gender}</p>
                <p>Course: ${student.course}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;

    });
}