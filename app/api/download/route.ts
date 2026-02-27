import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOC_ID = "dmeysPijTHB";
const TABLE_ID = "grid-auto-0SptJuVZjo";
const CODA_API_BASE = "https://coda.io/apis/v1";

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(req: Request) {
  try {
    if (!process.env.CODA_API_TOKEN) {
      console.error("CODA_API_TOKEN not set");
      return jsonError("Server configuration error.", 500);
    }

    const body = await req.json();
    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return jsonError("Email is required.", 400);
    }

    const insertUrl = `${CODA_API_BASE}/docs/${DOC_ID}/tables/${TABLE_ID}/rows`;

    const response = await fetch(insertUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CODA_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rows: [
          {
            cells: [
              { column: "Name", value: "" },
              { column: "Email", value: email },
              { column: "Message", value: "" },
              { column: "Source", value: "Download Brochure" },
            ],
          },
        ],
      }),
    });

    const result = await response.text();
    console.log("Coda response:", result);

    if (!response.ok) {
      return jsonError("Failed to insert row into Coda.", response.status);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonError("Unexpected server error.", 500);
  }
}
