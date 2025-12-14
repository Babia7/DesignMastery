import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDesignCritique = async (codeOrConcept: string, context: string): Promise<string> => {
  if (!apiKey) return "API Key not found. Please ensure it is set.";

  try {
    const prompt = `
      You are a world-class Senior UI/UX Engineer and Design Educator.
      The user is asking about: "${codeOrConcept}"
      Context: ${context}
      
      Provide a concise, educational response. 
      If it's code, explain the "why" behind the design decisions.
      If it's a concept, use analogies.
      Suggest one "Pro Tip" at the end.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't generate a critique at this moment. Please check your network or API key.";
  }
};

export const askDesignTutor = async (history: { role: string, text: string }[], newMessage: string): Promise<string> => {
    if (!apiKey) return "API Key missing.";

    try {
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are DesignMastery AI, a helpful, enthusiastic design tutor. You specialize in Tailwind CSS, React, and modern UI trends (Glassmorphism, Neumorphism, Motion). Keep answers short, visual, and practical.",
            },
            history: history.map(h => ({
                role: h.role,
                parts: [{ text: h.text }]
            }))
        });

        const response = await chat.sendMessage({ message: newMessage });
        return response.text || "I'm thinking...";
    } catch (error) {
        console.error("Chat Error:", error);
        return "I encountered an error connecting to the design brain.";
    }
}
