// Get DOM elements
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');

// Function to add a chat message to the UI
async function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to handle user input
async function handleUserInput() {
    const message = userInput.value;

    // Display user message
    addMessage(message, 'user');

    // Process the user message (implement your chatbot logic here)
    const reply = await processUserMessage(message);

    // Display chatbot's reply
    addMessage(reply.chatReply, 'chatbot');

    // Clear the input field
    userInput.value = '';
}

// Function to process user message (dummy logic, replace with your own)
async function processUserMessage(message) {
    async function performPost() {
        const url = '/chat'; // Replace with your API endpoint

        // Data to send in the POST request
        const data = {
            userInput: message
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log('Response:', responseData);

            // Process the response data here

            return responseData; // Return the response data
        } catch (error) {
            console.error('Error:', error);
            // Handle any errors here
            throw error; // Throw the error to be caught by the caller
        }
    }

    const chatResult = await performPost(message);


    // Dummy logic: Echo the user's message
    return `Chatbot: ${await chatResult.chatReply}`;
}

// Event listener for send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for Enter key press in the input field
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});