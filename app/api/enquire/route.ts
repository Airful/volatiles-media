import { NextRequest, NextResponse } from "next/server";

const CODA_DOC_ID = "dmeysPijTHB";
const CODA_TABLE_ID = "sux3SC-k";
const CODA_API_URL = `https://coda.io/apis/v1/docs/${CODA_DOC_ID}/tables/${CODA_TABLE_ID}/rows`;

export async function POST(req: NextRequest) {
  try {
    const { name, email, vision } = await req.json();

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !vision?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiToken = process.env.CODA_API_TOKEN;
    if (!apiToken) {
      console.error("CODA_API_TOKEN is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const codaRes = await fetch(CODA_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rows: [
          {
            cells: [
              { column: "Name", value: name.trim() },
              { column: "Email", value: email.trim() },
              { column: "Message", value: vision.trim() },
            ],
          },
        ],
      }),
    });

    if (!codaRes.ok) {
      const errorText = await codaRes.text();
      console.error("Coda API error:", codaRes.status, errorText);
      return NextResponse.json(
        { error: "Failed to submit enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Enquire route error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
