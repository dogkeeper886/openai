const { config } = require("dotenv");
config()
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');

const app = express();
const port = 8080; // Specify the desired port number
app.use(express.json()); // Middleware to parse JSON bodies

// Configure OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Prepare messges object
let chatRequestMessages = [
    {
        "role": "system",
        "content": "First, you will be provided entire response with html element.\n\nSecond, you will be provided code example which nested in following tags.\n\n<pre><code class=\\\"language-LANG\\\">\n\n</code></pre>"
    },
    {
        "role": "user",
        "content": "Can you give me an example of using fetch to POST in JavaScript?"
    },
    {
        "role": "assistant",
        "content": "<p>Sure! Here's an example of using `fetch()` to make a `POST` request:</p>\n</br>\n<pre><code class=\"language-js\">\nconst url = 'https://example.com/api/post';\n\nconst data = {\n  name: 'John',\n  age: 30\n};\n\nfetch(url, {\n  method: 'POST',\n  body: JSON.stringify(data),\n  headers:{\n    'Content-Type': 'application/json'\n  }\n})\n.then(res => res.json())\n.then(response => console.log('Success:', JSON.stringify(response)))\n.catch(error => console.error('Error:', error));\n</code></pre>\n<br>\n<p>In this example, we are making a `POST` request to a sample URL with some sample data (a name and age). We're using the `JSON.stringify()` method to convert the data into a JSON string so that it can be sent in the request body. We're also setting the `Content-Type` header to `application/json` to indicate that the request body contains JSON data.</p>\n</br>\n<p>The response from the server is then parsed as JSON using the `.json()` method, and we log the response to the console. If there is an error, we log the error to the console as well.</p>"
    }
];

async function runChat(userInput) {
    try {
        console.log("userInput:", userInput);

        // Send chat message to OpenAI API for completion
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            max_tokens: 1024,
            messages: [{ role: "user", content: userInput }],
        }); //message object example { role: "user", content: "Hello world" }

        console.log("chatReply:\n", JSON.stringify(completion.data.choices[0], null, 4));
        // Extract the response from completion and send it back
        const result = {
            content: completion.data.choices[0].message.content,
            finish_reason: completion.data.choices[0].finish_reason
        };

        return result;

    } catch (error) {
        console.error('Error:', error);
        throw error; // Throw the error to be caught by the caller
    }
}

// Define a POST route for create a chat completions.
app.post('/chat', async (req, res) => {
    try {
        const { userInput } = req.body;
        // Perform asynchronous operations or fetch data here
        const result = await runChat(userInput); // Replace with your actual asynchronous operation

        // Once the result is available, send it as the response
        res.json(result);
    } catch (error) {
        // Handle any errors that occurred during the asynchronous operations
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Define a GET route for get the system role content.
app.get('/system', (req, res) => {
    function getSystemContent(chatMessages) {
        return chatMessages.filter(message => message.role === "system");
    }

    const systemContent = getSystemContent(chatRequestMessages);
    res.json(systemContent);
});

// Define a PUT route for update the system role content.
app.put('/system', (req, res) => {
    const { content } = req.body;

    // Update the content of the system role
    function updateSystemContent(chatMessages) {
        const systemMessageIndex = chatMessages.findIndex(message => message.role === 'system');
        if (systemMessageIndex !== -1) {
            chatMessages[systemMessageIndex].content = content;
            res.status(200).json({ message: 'Content updated successfully.' });
        } else {
            res.status(404).json({ message: 'System message not found.' });
        }
    }

    updateSystemContent(chatRequestMessages);
});

// Define a GET route for get the user and assistent role content.
app.get('/examples', (req, res) => {
    function getUserAssistantMessages(chatMessages) {
        return chatMessages.filter(message => message.role === "user" || message.role === "assistant");
    }

    const userAssistantMessages = getUserAssistantMessages(chatRequestMessages);
    res.json(userAssistantMessages);
});

// Serve static files (HTML, CSS, JS) from a public folder
app.use(express.static('public'));

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
