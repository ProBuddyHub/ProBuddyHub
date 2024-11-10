// support.js

// Function to toggle FAQ answers
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Handle form submission
function submitForm(event) {
    event.preventDefault();

    // Placeholder for form submission logic (AJAX or backend integration)
    document.getElementById('formResponse').innerText = "Thank you for reaching out! We’ll get back to you soon.";
    
    // Clear the form fields
    document.getElementById('supportForm').reset();
}
