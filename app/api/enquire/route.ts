import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, vision } = await req.json();

    await fetch(
      "https://coda.io/apis/v1/docs/meysPijTHB/hooks/automation/grid-auto-0SptJuVZjo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          vision,
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Failed to send data" },
      { status: 500 }
    );
  }
}