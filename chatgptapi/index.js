import { config } from "dotenv";
config()
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello world" }],
}).then(res => {
    console.log(res.data.choices[0]);
});

