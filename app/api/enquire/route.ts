import { NextRequest, NextResponse } from "next/server";

// Force this route to always run dynamically on Vercel (never statically cached).
// Required for App Router API routes that read env vars or make external calls.
export const dynamic = "force-dynamic";

// ─── Coda Config ────────────────────────────────────────────────────────────
const CODA_DOC_ID = "dmeysPijTHB";
const CODA_TABLE_ID = "sux3SC-k";
const CODA_API_URL = `https://coda.io/apis/v1/docs/${CODA_DOC_ID}/tables/${CODA_TABLE_ID}/rows`;

// Column identifiers — Coda accepts the column display name OR the column ID (c-xxxxxxxx).
// If submissions fail with a 400, swap these to the actual column IDs from:
//   GET https://coda.io/apis/v1/docs/{docId}/tables/{tableId}/columns
// Look for the "id" field in each column object.
const COL_NAME = "Name";
const COL_EMAIL = "Email";
const COL_MESSAGE = "Message";

// Abort the Coda request if it takes longer than this (ms).
// Vercel Hobby timeout = 10 s. Keep this well under that limit.
const FETCH_TIMEOUT_MS = 7000;

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const tag = "[/api/enquire]";

  try {
    // 1. Parse body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      console.error(`${tag} Could not parse request JSON.`);
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, vision } = body as Record<string, string>;

    // 2. Validate fields
    if (!name?.trim() || !email?.trim() || !vision?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // 3. Verify token exists
    const apiToken = process.env.CODA_API_TOKEN;
    if (!apiToken) {
      // This means the env var is not set in Vercel — redeploy after adding it.
      console.error(`${tag} CODA_API_TOKEN is missing from environment variables.`);
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 4. Build Coda payload
    const payload = {
      rows: [
        {
          cells: [
            { column: COL_NAME,    value: name.trim()   },
            { column: COL_EMAIL,   value: email.trim()  },
            { column: COL_MESSAGE, value: vision.trim() },
          ],
        },
      ],
      keyColumns: [], // [] = always INSERT a new row; never upsert/update existing
    };

    console.log(`${tag} Sending row to Coda → ${CODA_API_URL}`);

    // 5. Call Coda API with a timeout guard
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    let codaRes: Response;
    try {
      codaRes = await fetch(CODA_API_URL, {
        method: "POST",
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (fetchErr) {
      const isTimeout = (fetchErr as Error).name === "AbortError";
      console.error(
        `${tag} Fetch ${isTimeout ? "timed out" : "failed"}:`,
        fetchErr
      );
      return NextResponse.json(
        { error: "Could not reach the submission service. Please try again." },
        { status: 504 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    // 6. Read Coda response
    const responseText = await codaRes.text();

    if (!codaRes.ok) {
      // Log the full Coda error — visible in Vercel → Deployments → Functions log
      console.error(
        `${tag} Coda API rejected the request.`,
        `\n  Status : ${codaRes.status} ${codaRes.statusText}`,
        `\n  Body   : ${responseText}`,
        `\n  URL    : ${CODA_API_URL}`
      );

      // Map common Coda error codes to user-friendly messages
      if (codaRes.status === 401) {
        console.error(`${tag} → Check that CODA_API_TOKEN is correct and has write access to this doc.`);
        return NextResponse.json(
          { error: "Server configuration error." },
          { status: 500 }
        );
      }

      if (codaRes.status === 404) {
        console.error(`${tag} → Doc ID "${CODA_DOC_ID}" or Table ID "${CODA_TABLE_ID}" not found. Verify both IDs.`);
        return NextResponse.json(
          { error: "Server configuration error." },
          { status: 500 }
        );
      }

      if (codaRes.status === 400) {
        console.error(
          `${tag} → Bad request. Most likely a wrong column name/ID.`,
          `\n  Expected column names: "${COL_NAME}", "${COL_EMAIL}", "${COL_MESSAGE}"`,
          `\n  Check they match exactly in your Coda table, or replace with column IDs.`
        );
      }

      return NextResponse.json(
        { error: "Failed to submit enquiry. Please try again." },
        { status: 502 }
      );
    }

    console.log(`${tag} Row inserted successfully. Coda response: ${responseText}`);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error(`${tag} Unexpected error:`, err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
