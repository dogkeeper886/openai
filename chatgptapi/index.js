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
    console.log("userInput:", userInput)

    // Send chat message to OpenAI API for completion
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        messages: [{ role: "user", content: userInput }],
    }); //message object example { role: "user", content: "Hello world" }

    // Extract the response from completion and send it back
    const reply = await completion.data.choices[0].message.content;
    console.log("chatReply:", await reply)
    return await reply
}

// Define a POST route for chat messages
app.post('/chat', async (req, res) => {
    const { userInput } = req.body;
    const chatReply = await runChat(userInput);
    res.json({ chatReply });
});

// Serve static files (HTML, CSS, JS) from a public folder
app.use(express.static('public'));

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
