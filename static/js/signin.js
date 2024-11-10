document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".signin-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Handle form submission with basic client-side validation
    form.addEventListener("submit", function(event) {
        let valid = true;
        clearErrors();

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            valid = false;
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters.");
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            event.preventDefault();
        }
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Show error message below an input field
    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.textContent = message;
        input.parentElement.insertBefore(errorElement, input.nextSibling);
        input.classList.add("error");
    }

    // Clear all error messages
    function clearErrors() {
        document.querySelectorAll(".error-message").forEach((el) => el.remove());
        document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
    }
});
