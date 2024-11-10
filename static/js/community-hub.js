// community-hub.js

// Function to navigate to different sections
function navigateTo(section) {
    switch(section) {
        case 'forum':
            window.location.href = '/forum';
            break;
        case 'projects':
            window.location.href = '/projects';
            break;
        case 'events':
            window.location.href = '/events';
            break;
        case 'mentorship':
            window.location.href = '/mentorship';
            break;
        default:
            console.log("Unknown section: " + section);
    }
}

// Display an alert message if a section is unavailable (optional)
function displayAlert(sectionName) {
    alert(`The ${sectionName} section is coming soon. Stay tuned!`);
}
