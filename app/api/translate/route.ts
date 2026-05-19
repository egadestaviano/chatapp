// app/api/translate/route.ts
import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const LIBRETRANSLATE_URL =
  process.env.LIBRETRANSLATE_URL || "https://lt.vern.cc";
const LIBRETRANSLATE_API_KEY = process.env.LIBRETRANSLATE_API_KEY;

const MAX_TEXT_LENGTH = 5000;

export async function POST(req: NextRequest) {
  const auth = await getServerSession(authOptions);
  if (!auth?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const text = typeof body?.text === "string" ? body.text : "";
  const target = typeof body?.target === "string" ? body.target : "";
  const source =
    typeof body?.source === "string" && body.source.length > 0
      ? body.source
      : "auto";

  if (!text || !target) {
    return new Response("text and target required", { status: 400 });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return new Response("text too long", { status: 413 });
  }

  const urls = [
    LIBRETRANSLATE_URL,
    "https://translate.terraprint.co",
    "https://translate.argosopentech.com",
  ];

  let lastError = null;

  for (const url of urls) {
    try {
      const res = await fetch(`${url}/translate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          source,
          target,
          format: "text",
          ...(LIBRETRANSLATE_API_KEY ? { api_key: LIBRETRANSLATE_API_KEY } : {}),
        }),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "");
        const isHtml = /<[a-z][\s\S]*>/i.test(errText) || errText.trim().startsWith("<!DOCTYPE") || errText.trim().startsWith("<html");
        const cleanErr = isHtml ? "Returned HTML page" : errText;
        lastError = `Translation service error: ${res.status} ${cleanErr}`;
        console.warn(`Translation attempt failed for ${url}: ${lastError}`);
        continue;
      }

      const data = await res.json();
      return Response.json({
        translatedText: data.translatedText ?? "",
        detectedSource:
          data.detectedLanguage?.language ?? (source !== "auto" ? source : null),
      });
    } catch (err: any) {
      lastError = err.message || "Unknown error";
      console.warn(`Translation attempt failed for ${url}: ${lastError}`);
      continue;
    }
  }

  console.error("All translation attempts failed:", lastError);
  return new Response(lastError || "Translation service unavailable", { status: 502 });
}
