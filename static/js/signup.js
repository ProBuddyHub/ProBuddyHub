document.addEventListener('DOMContentLoaded', function () {
    const quantumBuddy = document.getElementById('quantum-buddy');
    const eliteBuddy = document.getElementById('elite-buddy');
    const quantumForm = document.getElementById('quantum-form');
    const eliteForm = document.getElementById('elite-form');
    const showPasswords = document.getElementById('show-passwords');
    const accountType = document.getElementById('account-type');
    const companySizeField = document.getElementById('company-size');

    // Toggle forms
    quantumBuddy.addEventListener('click', () => {
        quantumForm.classList.remove('hidden');
        eliteForm.classList.add('hidden');
        quantumBuddy.classList.add('selected');
        eliteBuddy.classList.remove('selected');
    });

    eliteBuddy.addEventListener('click', () => {
        quantumForm.classList.add('hidden');
        eliteForm.classList.remove('hidden');
        eliteBuddy.classList.add('selected');
        quantumBuddy.classList.remove('selected');
    });

    // Show/hide passwords
    showPasswords.addEventListener('change', function () {
        const passwordFields = document.querySelectorAll('#password, #confirm-password, #pro-password, #pro-confirm-password');
        passwordFields.forEach(field => field.type = this.checked ? 'text' : 'password');
    });

    // Show company size field for company accounts
    accountType.addEventListener('change', function () {
        if (this.value === 'company') {
            companySizeField.classList.remove('hidden');
        } else {
            companySizeField.classList.add('hidden');
        }
    });

    // Validate password match for both forms
    function validatePasswords(password, confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please retype.");
            return false;
        }
        return true;
    }

    // Form validation
    window.validateQuantumForm = function () {
        return validatePasswords(document.getElementById('password').value, document.getElementById('confirm-password').value);
    };

    window.validateEliteForm = function () {
        return validatePasswords(document.getElementById('pro-password').value, document.getElementById('pro-confirm-password').value);
    };
});


document.addEventListener('DOMContentLoaded', function () {
    const quantumBuddy = document.getElementById('quantum-buddy');
    const eliteBuddy = document.getElementById('elite-buddy');
    const quantumForm = document.getElementById('quantum-form');
    const eliteForm = document.getElementById('elite-form');
    const accountType = document.getElementById('account-type');
    const companySizeField = document.getElementById('company-size');

    // Toggle forms
    quantumBuddy.addEventListener('click', () => {
        quantumForm.classList.remove('hidden');
        eliteForm.classList.add('hidden');
        quantumBuddy.classList.add('selected');
        eliteBuddy.classList.remove('selected');
    });

    eliteBuddy.addEventListener('click', () => {
        quantumForm.classList.add('hidden');
        eliteForm.classList.remove('hidden');
        eliteBuddy.classList.add('selected');
        quantumBuddy.classList.remove('selected');
    });

    // Toggle password visibility
    window.togglePasswordVisibility = function (fieldId) {
        const passwordField = document.getElementById(fieldId);
        passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
    };

    // Show company size field for company accounts
    accountType.addEventListener('change', function () {
        if (this.value === 'company') {
            companySizeField.classList.remove('hidden');
        } else {
            companySizeField.classList.add('hidden');
        }
    });

    // Validate password match for both forms
    function validatePasswords(password, confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please retype.");
            return false;
        }
        return true;
    }

    // Form validation
    window.validateQuantumForm = function () {
        return validatePasswords(document.getElementById('password').value, document.getElementById('confirm-password').value);
    };

    window.validateEliteForm = function () {
        return validatePasswords(document.getElementById('pro-password').value, document.getElementById('pro-confirm-password').value);
    };
});
