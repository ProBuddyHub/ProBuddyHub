document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const textElement = document.getElementById("typing-effect");
    const text = "Transforming Ideas into Reality with AI";
    let index = 0;

    function typeCharacter() {
        // Clear the text content once before typing
        if (index === 0) {
            textElement.textContent = "";
        }

        // Type the text character by character
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;

            setTimeout(typeCharacter, 100); // Adjust speed as needed
        }
    }

    // Start the typing effect
    typeCharacter();

    // Fade-in Transition for Buttons
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element, i) => {
        setTimeout(() => {
            element.classList.add("visible"); // CSS handles transition
        }, i * 500); // Delay based on index
    });
});

