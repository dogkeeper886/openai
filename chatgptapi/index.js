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
        config.log('Error:', error);
        throw error; // Throw the error to be caught by the caller
    }
}

// Define a POST route for chat messages
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

// Serve static files (HTML, CSS, JS) from a public folder
app.use(express.static('public'));

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
