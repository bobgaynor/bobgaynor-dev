import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: any | null = null; // We'll need to redefine the Chat and GenerateContentResponse types or use 'any'

/**
 * Initializes or retrieves the existing chat session.
 * Using a singleton pattern for the session to maintain history during the user's visit.
 */
export const getChatSession = (): any => {
  if (!chatSession) {
    // The chat session is now just a concept on the client-side
    // The actual history will be managed by the backend if needed
    chatSession = {}; 
  }
  return chatSession;
};

/**
 * Sends a message to the Gemini AI and returns the response text.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: message }),
    });

    if (!response.ok) {
      throw new Error('Failed to connect to the AI assistant.');
    }

    const data = await response.json();
    return data.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to the AI assistant.");
  }
};
