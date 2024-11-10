document.addEventListener('DOMContentLoaded', () => {
    // Interactive behavior for course, tutorial, and challenge sections
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', () => {
            alert('More details will be available soon!');
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
