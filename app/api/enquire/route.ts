export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, vision } = await req.json();

    if (!name || !email || !vision) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.CODA_API_TOKEN) {
      console.error("[enquire] CODA_API_TOKEN is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const codaRes = await fetch(
      "https://coda.io/apis/v1/docs/dmeysPijTHB/tables/sux3SC-k/rows",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CODA_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rows: [
            {
              cells: [
                { column: "Name",    value: name   },
                { column: "Email",   value: email  },
                { column: "Message", value: vision },
              ],
            },
          ],
          keyColumns: [],
        }),
      }
    );

    const text = await codaRes.text();

    if (!codaRes.ok) {
      console.error(`[enquire] Coda error ${codaRes.status}:`, text);
      return NextResponse.json(
        { error: "Failed to submit enquiry. Please try again." },
        { status: 502 }
      );
    }

    console.log("[enquire] Success:", text);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[enquire] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
