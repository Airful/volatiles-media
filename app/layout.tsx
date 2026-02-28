import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "Volatiles — Where Light Meets Matter",
  description:
    "Interactive LED art panels fused with the world's finest materials. Invisible technology. Visible luxury. Handcrafted in Germany.",
  keywords:
    "LED art panels, luxury interiors, interactive light art, volatiles, handcrafted Germany",
  icons: {
    icon: "/images/favicon-150x150.webp",
    shortcut: "/images/favicon-150x150.webp",
    apple: "/images/favicon-150x150.webp",
  },
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
      <body className="bg-black text-white antialiased">
        <MouseGlow />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
