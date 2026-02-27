const PDF_PATH = "/volatiles-canvas-brochure-2026_sv-ENG_Team_Southeast.pdf";

export async function handleBrochureDownload(email: string): Promise<void> {
  const res = await fetch("/api/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }

  const link = document.createElement("a");
  link.href = PDF_PATH;
  link.download = PDF_PATH.split("/").pop() ?? "brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
