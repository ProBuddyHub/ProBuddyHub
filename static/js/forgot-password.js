document.querySelector('.forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("A password reset link has been sent to your email.");
});


       // JavaScript for handling the form submission
       document.getElementById('forgot-password-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent form from reloading the page

        const email = document.getElementById('email').value;
        const responseMessage = document.getElementById('response-message');

        try {
            const response = await fetch('/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();

            // Display success or error message
            if (response.ok) {
                responseMessage.textContent = result.message || 'Reset link sent! Please check your email.';
                responseMessage.classList.add('success');
            } else {
                responseMessage.textContent = result.message || 'There was an error. Please try again later.';
                responseMessage.classList.add('error');
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            responseMessage.classList.add('error');
        }
    });