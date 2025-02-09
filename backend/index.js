const OpenAI = require("openai");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

dotenv.config(); // Ensure .env is loaded before using environment variables

const app = express();
app.use(bodyParser.json());

// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// GPT API Route
app.post("/gpt", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.chat.completions.create({
            model: "gpt-4o", // Use correct model name
            messages: [{ role: "user", content: prompt }],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        if (response.choices && response.choices.length > 0) {
            // console.log("AI Response:", response.choices[0].message.content);
            return res.json({ response: response.choices[0].message.content });
        } else {
            console.log("No response choices found.");
            return res.status(500).json({ error: "No valid response from OpenAI" });
        }
    } catch (error) {
        console.error("Error during GPT API call:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// DALL·E API Route
app.post("/dalle", async (req, res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt, // Use user-supplied prompt
            n: 1,
            size: "1024x1024",
        });

        if (response.data && response.data.length > 0) {
            // console.log("DALL·E Response:", response.data[0].url);
            return res.json({ imageUrl: response.data[0].url });
        } else {
            console.log("No image generated.");
            return res.status(500).json({ error: "No image generated by OpenAI" });
        }
    } catch (error) {
        console.error("Error during DALL·E API call:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
