
import { GoogleGenAI } from "@google/genai";

export const generateRomanticPoem = async (mood: string): Promise<string> => {
  // Always use the process.env.API_KEY and follow initialization guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a short, beautiful, and deeply romantic 4-line poem for a girl named MUSKAN. The mood is ${mood}. Focus on her smile and how special she is. No hashtags.`,
      config: {
        temperature: 0.9,
        topP: 1,
        // Removed maxOutputTokens to follow the recommendation for Gemini 3 models
      }
    });

    // Access .text property directly (not as a method)
    return response.text || "Your smile lights up my world, MUSKAN. Every moment with you is a dream come true.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "In every breath, in every beat, MUSKAN, you make my life complete.";
  }
};