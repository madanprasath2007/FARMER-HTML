
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const analyzeCropImage = async (base64Image: string): Promise<any> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY || '' });
  
  const prompt = "Act as an expert agronomist. Analyze this crop image for any signs of disease, pests, or nutrient deficiencies. Provide a structured response including: disease name (if any), confidence percentage, organic and chemical treatment steps, and long-term prevention advice.";

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
};

export const getMarketAdvisory = async (query: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as a multilingual agricultural market analyst. Answer this farmer's query concisely and practically: ${query}. Focus on market trends and crop health.`,
  });

  return response.text || "Sorry, I couldn't get the latest advisory. Please try again.";
};
