import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CODA_URL =
  "https://coda.io/apis/v1/docs/dmeysPijTHB/tables/sux3SC-k/rows";

export async function POST(req: NextRequest) {
  try {
    // ── 1. Parse body ────────────────────────────────────────────────────────
    let name: string, email: string, vision: string;
    try {
      ({ name, email, vision } = await req.json());
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // ── 2. Validate ──────────────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !vision?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ── 3. Token guard ───────────────────────────────────────────────────────
    const token = process.env.CODA_API_TOKEN;
    if (!token) {
      console.error("[enquire] CODA_API_TOKEN is not set in environment.");
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // ── 4. Call Coda ─────────────────────────────────────────────────────────
    const payload = {
      rows: [
        {
          cells: [
            { column: "Name",    value: name.trim()   },
            { column: "Email",   value: email.trim()  },
            { column: "Message", value: vision.trim() },
          ],
        },
      ],
      keyColumns: [],
    };

    console.log("[enquire] Posting to Coda:", CODA_URL);

    const codaRes = await fetch(CODA_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await codaRes.text();

    // ── 5. Handle Coda errors ─────────────────────────────────────────────────
    if (!codaRes.ok) {
      console.error(
        `[enquire] Coda error — ${codaRes.status} ${codaRes.statusText}\n`,
        `Body: ${responseText}\n`,
        `URL:  ${CODA_URL}`
      );
      return NextResponse.json(
        { error: "Failed to submit enquiry. Please try again." },
        { status: 502 }
      );
    }

    console.log("[enquire] Success:", responseText);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[enquire] Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
