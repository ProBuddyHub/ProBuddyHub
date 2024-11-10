// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select all pricing cards and buttons
    const pricingCards = document.querySelectorAll('.pricing-card');
    const buttons = document.querySelectorAll('.pricing-card button');

    // Highlight card on hover
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-highlight');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-highlight');
        });
    });

    // Show alert with more details about each plan when clicking the button
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const plan = event.target.parentElement.querySelector('h2').textContent;
            let message = `You selected the ${plan} plan.`;

            if (plan === "Free") {
                message += "\n\nFeatures:\n- Access to basic courses\n- Community support\n- Access to tutorials";
            } else if (plan === "Pro") {
                message += "\n\nFeatures:\n- Everything in Free\n- Advanced courses & challenges\n- Priority support\n- Access to exclusive webinars";
            } else if (plan === "Premium") {
                message += "\n\nFeatures:\n- Everything in Pro\n- One-on-one mentorship\n- Personalized learning paths\n- Monthly project feedback";
            }

            alert(message);
        });
    });
});
