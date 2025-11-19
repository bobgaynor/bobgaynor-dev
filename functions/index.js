const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { GoogleGenerativeAI } = require("@google/generative-ai");

admin.initializeApp();

// Get your API key from environment variables using functions.config()
// This is the recommended way for Firebase Cloud Functions
const API_KEY = functions.config().gemini.key;

let genAI;
try {
  genAI = new GoogleGenerativeAI(API_KEY);
} catch (error) {
  console.error("Failed to initialize GoogleGenerativeAI, check your API key.", error);
}

exports.geminiProxy = functions.region('us-central1').https.onCall(async (data, context) => {
  // Ensure the user is authenticated if you want to add security
  // if (!context.auth) {
  //   throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  // }

  const { prompt, history } = data;

  if (!prompt) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a "prompt".');
  }

  if (!genAI) {
    throw new functions.https.HttpsError('internal', 'The AI model is not initialized. Check API Key configuration.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = await response.text();
    
    return { text };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Throwing an HttpsError allows the client to receive a specific error code and message.
    throw new functions.https.HttpsError('internal', 'Failed to call the Gemini API.', error.message);
  }
});