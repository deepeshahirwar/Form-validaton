


const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const address_error = document.getElementById("address_error");
const telephone_error = document.getElementById("telephone_error");
const comment_error = document.getElementById("comment_error");
const select_courses = document.getElementById("select-cources"); 
let Allerror = {name_error,email_error,password_error,address_error,telephone_error,comment_error};

// Validation function
const validateData = function () {
    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const address = document.getElementById("address");
    const telephone = document.getElementById("telephone");

    // Reset previous error styles
   
    // Validation logic for name
    if (name.value === "" || !isNaN(name.value)) {
        name.style.border = "1px solid red";
        name_error.style.display = "block";
        name.focus();
        return false;
    }

    // Validation logic for email
    if (email.value === "" || email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    // Validation logic for password
    if (password.value === "" || password.value.length < 6) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

    // Validation logic for address
    if (address.value === "" || address.value.length < 5) {
        address.style.border = "1px solid red";
        address_error.style.display = "block";
        address.focus();
        return false;
    }

    // Validation logic for telephone
    if (telephone.value === "" || telephone.value.length !== 10) {
        telephone.style.border = "1px solid red";
        telephone_error.style.display = "block";
        telephone.focus();
        return false;
    }

    // Validation logic for select-courses
    if (select_courses.value === -1) {
        select_courses.style.border = "1px solid red";
        // Display error message or handle it accordingly
        return false;
    }

    // If all validations pass 
    return true; 
    resetErrorStyles();

};

// Reset error styles
function resetErrorStyles() {
    const formFields = document.querySelectorAll("input, select");
    formFields.forEach(field => {
        field.style.border = "1px solid #ccc";
    }); 

    Allerror.forEach(errorElement => {
        errorElement.style.display = "none";
    });
}

// Submission function
function submitData() {
    if (validateData()) {
        alert('Your data has been submitted...');
    } 
    resetErrorStyles();
}

// Reset function
function resetData() {
    let userConfirmation = confirm('You want to reset your data'); 
    // set all input as empty
    if (userConfirmation) {
        const formFields = document.querySelectorAll("input, select");
        formFields.forEach(field => {
            field.value = "";
        });  
        

        document.getElementById("comment").value="";
        resetErrorStyles();
    }
}

// Attach event listeners
document.getElementById("submitBtn").addEventListener("click", submitData);
document.getElementById("resetBtn").addEventListener("click", resetData); 
// document.getElementById("submitBtn").addEventListener("click", validation);
