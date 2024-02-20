const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const address_error = document.getElementById("address_error");
const telephone_error = document.getElementById("telephone_error");
const comment_error = document.getElementById("comment_error");
const select_courses = document.getElementById("select-cources");

function DataValidation() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const address = document.getElementById("address");
    const telephone = document.getElementById("telephone");

    if (name.value === "" || !isNaN(name.value)) {
        // Validation logic for name
        name.style.border = "1px solid red";
        name_error.style.display = "block";
        name.focus();
        return false;
    }

    // Add similar validation for other fields

    if (email.value === "" || email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value === "" || password.value.length < 6) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

    if (address.value === "" || address.value.length < 5) {
        address.style.border = "1px solid red";
        address_error.style.display = "block";
        address.focus();
        return false;
    }

    if (telephone.value === "" || telephone.value.length !== 10) {
        telephone.style.border = "1px solid red";
        telephone_error.style.display = "block";
        telephone.focus();
        return false;
    }

    if (select_courses.value === "") {
        // Validation logic for select-courses
        select_courses.style.border = "1px solid red";
        // Display error message or handle it accordingly
        return false;
    }

    // If all validations pass
    alert('Your data has been submitted...');
    return true;
}

// for user data reset

function resetData() {
    let userConfirmation = confirm('You want to reset your data');
    if (userConfirmation) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("address").value = "";
        document.getElementById("comment").value = "";
        select_courses.value = "";
    }
}

document.getElementById("submitBtn").addEventListener("click", DataValidation);
document.getElementById("resetBtn").addEventListener("click", resetData);
