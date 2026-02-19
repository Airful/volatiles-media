import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volatiles — Where Light Meets Matter",
  description:
    "Interactive LED art panels fused with the world's finest materials. Invisible technology. Visible luxury. Handcrafted in Germany.",
  keywords:
    "LED art panels, luxury interiors, interactive light art, volatiles, handcrafted Germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
