const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { GoogleGenerativeAI } = require("@google/generative-ai");

admin.initializeApp();

// Get your API key from environment variables
const API_KEY = functions.config().gemini.key;

const genAI = new GoogleGenerativeAI(API_KEY);

exports.geminiProxy = functions.https.onRequest(async (req, res) => {
  // Set CORS headers for preflight requests
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).send({ error: "Prompt is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.send({ text });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).send({ error: "Failed to call Gemini API" });
  }
});