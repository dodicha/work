import { NextResponse } from "next/server";

export async function POST(req) {
  const { text, lang } = await req.json();

  try {
    const res = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        source: "en", // ტექსტის ორიგინალი ენა
        target: lang,
        format: "text",
      }),
    });

    const data = await res.json();

    return NextResponse.json({ translated: data.translatedText });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
