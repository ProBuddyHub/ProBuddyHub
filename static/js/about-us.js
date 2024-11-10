// Add any future interactivity here
document.addEventListener('DOMContentLoaded', function() {
    // Example functionality for "See More" button if needed
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to the profile page (you can also use AJAX to load the data dynamically if needed)
            window.location.href = button.href;
        });
    });
});
