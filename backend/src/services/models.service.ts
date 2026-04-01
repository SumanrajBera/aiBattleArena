import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"
import configAPI from "../config/config.js";

/**
 * @usage Judge
 */
export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: configAPI.GEMINI_API_KEY
});

/**
 * @usage First AI battle participant
 */
export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: configAPI.MISTRAL_API_KEY
});

/**
 * @usage Second AI battle participant
 */
export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: configAPI.COHERE_API_KEY
})