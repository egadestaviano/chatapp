import { GoogleGenAI } from "@google/genai";

let cachedClient: any = null;
let cachedApiKey: string | null = null;

function getApiKey() {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
    null
  );
}

function getModel() {
  return process.env.GEMINI_MODEL || "gemini-2.0-flash";
}

function getClient() {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  if (!cachedClient || cachedApiKey !== apiKey) {
    cachedApiKey = apiKey;
    cachedClient = new GoogleGenAI({ apiKey });
  }

  return cachedClient;
}

function toGeminiContents(messages: any[] = []) {
  return messages
    .filter((message) => typeof message?.content === "string" && message.content.trim())
    .map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content.trim() }],
    }));
}

async function streamMockResponse(prompt: string, onChunk: (chunk: string) => void) {
  const fallback = `AI contact is ready. Gemini belum dikonfigurasi penuh, jadi ini fallback sementara.\n\nPesan terakhir kamu:\n\n> ${prompt}`;
  const chunks = fallback.match(/.{1,18}(\s|$)/g) ?? [fallback];

  for (const chunk of chunks) {
    onChunk(chunk);
    await new Promise((resolve) => setTimeout(resolve, 24));
  }
}

export async function streamAiResponse(messages: any[] = [], { onChunk }: { onChunk: (chunk: string) => void }) {
  const contents = toGeminiContents(messages);
  const lastPrompt = contents.at(-1)?.parts?.[0]?.text ?? "";

  if (!contents.length) {
    throw new Error("No AI input provided");
  }

  if (typeof onChunk !== "function") {
    throw new Error("onChunk callback is required");
  }

  const client = getClient();
  if (!client) {
    await streamMockResponse(lastPrompt, onChunk);
    return;
  }

  // Use the models.generateContentStream according to @google/genai pattern in reference
  const stream = await client.models.generateContentStream({
    model: getModel(),
    contents,
    config: {
      systemInstruction:
        "You are an in-app AI chat contact. Be helpful, concise, friendly, and format answers in clean markdown when useful.",
    },
  });

  let emittedText = "";

  for await (const chunk of stream) {
    const text = chunk.text ?? "";
    if (!text) continue;

    const nextChunk = text.startsWith(emittedText)
      ? text.slice(emittedText.length)
      : text;

    if (!nextChunk) continue;

    emittedText += nextChunk;
    onChunk(nextChunk);
  }
}
