// Get DOM elements
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatBody = document.getElementById('chat-body');

// Function to add a chat message to the UI
function addMessage(message, sender) {
    const messageElement = document.createElement('pre');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    //chatBody.scrollTop = chatBody.scrollHeight;
}

function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.cloneNode(true);
}

// Function to handle user input
async function handleUserInput() {
    try {
        const message = userInput.value;

        // Display user message
        addMessage("User: " + message, 'user');

        // Process the user message (implement your chatbot logic here)
        const reply = await processUserMessage(message);

        // Display chatbot's reply
        //addMessage("Chatbot: " + reply, 'chatbot');
        const fragment = htmlToElement(reply);
        chatBody.appendChild(fragment);
        // Clear the input field
        userInput.value = '';
    } catch (error) {
        console.error('Error:', error);
        // Handle any errors here
        throw error; // Throw the error to be caught by the caller
    }
}

// Function to process user message (dummy logic, replace with your own)
async function processUserMessage(message) {
    try {
        const url = '/chat'; // Replace with your API endpoint

        // Data to send in the POST request
        const data = {
            userInput: message
        };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json(); // Process the response data here
        console.log('Response:\n', JSON.stringify(result, null, 4));

        // Dummy logic: Echo the user's message
        return result.content;
    } catch (error) {
        console.error('Error:', error);
        // Handle any errors here
        throw error; // Throw the error to be caught by the caller
    }
}

// Event listener for send button click
sendBtn.addEventListener('click', handleUserInput);

// Event listener for Enter key press in the input field
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Event listener for page has finished loading and all the content is ready to be manipulated.
document.addEventListener('DOMContentLoaded', function () {
    // scroll down to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
})