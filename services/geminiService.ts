
import { ChatMessage } from '../types';

// A simple client-side store for the chat history
let chatHistory: { role: string; parts: { text: string }[] }[] = [];

/**
 * Sends a message to the Gemini AI and returns the response text.
 * It now also sends the existing chat history for context.
 */
export const sendMessageToGemini = async (message: string, messages: ChatMessage[]): Promise<string> => {
  try {
    // Convert the messages to the format expected by the backend
    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    })).slice(0, -1); // Exclude the latest user message as it's the new prompt

    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: message, history }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // Try to parse error message from backend
      const errorMessage = errorData?.error || 'Failed to connect to the AI assistant.';
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Add the user message and AI response to our client-side history
    chatHistory.push({ role: 'user', parts: [{ text: message }] });
    chatHistory.push({ role: 'model', parts: [{ text: data.text }] });

    return data.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // The error from this function will be caught by the calling component (ChatWidget)
    // which will then set the appropriate error message in the UI.
    throw error; 
  }
};
