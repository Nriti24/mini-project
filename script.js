document.getElementById("sendBtn").addEventListener("click", function() {
    let messageInput = document.getElementById("messageInput");
    let messageText = messageInput.value.trim();
    
    if (messageText) {
        // Add the user message to the chat window
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "user");
        messageDiv.textContent = messageText;
        document.getElementById("chatWindow").appendChild(messageDiv);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat window
        document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight;

        // Simulate a bot response after a brief delay
        setTimeout(function() {
            let botMessageDiv = document.createElement("div");
            botMessageDiv.classList.add("message");
            botMessageDiv.textContent = "Thanks for your message!";
            document.getElementById("chatWindow").appendChild(botMessageDiv);

            // Scroll to the bottom after bot response
            document.getElementById("chatWindow").scrollTop = document.getElementById("chatWindow").scrollHeight;
        }, 1000);
    }
});
