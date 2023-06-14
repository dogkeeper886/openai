// Get DOM elements
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');

// Function to add a chat message to the UI
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value;

    // Display user message
    addMessage(message, 'user');

    // Process the user message (implement your chatbot logic here)
    const reply = processUserMessage(message);

    // Display chatbot's reply
    addMessage(reply, 'chatbot');

    // Clear the input field
    userInput.value = '';
}

// Function to process user message (dummy logic, replace with your own)
function processUserMessage(message) {
    // Dummy logic: Echo the user's message
    return `You said: ${message}`;
}

// Event listener for send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for Enter key press in the input field
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
