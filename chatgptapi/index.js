const { config } = require("dotenv");
config()
const { Configuration, OpenAIApi } = require("openai");
const express = require('express');

const app = express();
const port = 8080; // Specify the desired port number

// Configure OpenAI API
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define a POST route for chat messages
app.post('/chat', async (req, res) => {
    const { message } = req.body;

    // Send chat message to OpenAI API for completion
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        messages: [message],
    }); //message object example { role: "user", content: "Hello world" }

    // Extract the response from completion and send it back
    const reply = completion.choices[0].text.trim();
    res.json({ reply });
});

// Serve static files (HTML, CSS, JS) from a public folder
app.use(express.static('public'));

// Define a catch-all route for frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
