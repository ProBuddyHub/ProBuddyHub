document.addEventListener('DOMContentLoaded', () => {
    // Toggle each use-case section content on title click
    document.querySelectorAll('#use-cases .use-case h2').forEach(header => {
        header.addEventListener('click', () => {
            const sectionContent = header.nextElementSibling;
            sectionContent.style.display = sectionContent.style.display === 'none' ? 'block' : 'none';
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
