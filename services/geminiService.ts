
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Helper to get a fresh instance of the Gemini API.
 * This prevents top-level reference errors to 'process' in browser environments.
 */
const getAI = () => {
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || '';
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Please ensure process.env.API_KEY is configured.");
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeCropImage = async (base64Image: string): Promise<any> => {
  const ai = getAI();
  
  const prompt = "Act as an expert agronomist. Analyze this crop image for any signs of disease, pests, or nutrient deficiencies. Provide a structured response including: disease name (if any), confidence percentage, organic and chemical treatment steps, and long-term prevention advice.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          parts: [
            { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
            { text: prompt }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            disease: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            treatment: { type: Type.STRING },
            prevention: { type: Type.STRING }
          },
          required: ["disease", "confidence", "treatment", "prevention"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error: any) {
    console.error("AI Diagnosis Error:", error);
    throw new Error(error.message || "Failed to analyze image");
  }
};

export const getMarketAdvisory = async (query: string): Promise<string> => {
  const ai = getAI();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Act as a multilingual agricultural market analyst. Answer this farmer's query concisely and practically: ${query}. Focus on current market trends and crop health.`,
    });

    return response.text || "Sorry, I couldn't get the latest advisory. Please try again.";
  } catch (error: any) {
    console.error("AI Advisory Error:", error);
    return "Error: Could not connect to the advisory service. Please check your configuration.";
  }
};
