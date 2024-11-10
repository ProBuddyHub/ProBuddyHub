document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function() {
        const query = userInput.value.trim();
        if (query === "") return;

        appendMessage(query, "user");

        fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_input: query })
        })
        .then(response => response.json())
        .then(data => {
            appendMessage(data.response, "ai");
        })
        .catch(error => {
            console.error("Error:", error);
            appendMessage("Sorry, an error occurred.", "ai");
        });

        userInput.value = "";  // Clear input field
        chatLog.scrollTop = chatLog.scrollHeight;  // Auto-scroll to bottom
    });

    function appendMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender + "-message");
        messageElement.innerHTML = `<p><strong>${sender === "user" ? "You" : "Buddy"}:</strong> ${message}</p>`;
        chatLog.appendChild(messageElement);
    }
});
