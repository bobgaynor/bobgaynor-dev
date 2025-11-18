import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize Gemini Client
// Note: In a real production app, be careful exposing API keys in client-side code 
// without strict referer restrictions or a backend proxy.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chatSession: Chat | null = null;

/**
 * Initializes or retrieves the existing chat session.
 * Using a singleton pattern for the session to maintain history during the user's visit.
 */
export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });
  }
  return chatSession;
};

/**
 * Sends a message to the Gemini AI and returns the response text.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to the AI assistant.");
  }
};
