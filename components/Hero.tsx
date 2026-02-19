"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      {/* Background Image */}
    

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,98,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[760px] mx-auto">

        {/* Top label */}
        <p
          className="text-[#C9A962] mb-8"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.45em",
            fontWeight: 300,
          }}
        >
          HANDCRAFTED IN GERMANY
        </p>

        {/* Heading */}
        <h1
          className="text-white mb-8 leading-[1.05]"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Where Light
          <br />
          Meets{" "}
          <span style={{ color: "#C9A962", fontStyle: "italic" }}>
            Matter
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-[#B3B3B3] mb-12"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "clamp(13px, 1.5vw, 15px)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            maxWidth: "440px",
          }}
        >
          Interactive LED art panels fused with the world&apos;s finest
          materials.
          <br />
          Invisible technology. Visible luxury.
        </p>

        {/* Form */}
        <form
          onSubmit={handleDownload}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[560px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 text-white/80 placeholder-white/30 text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontFamily: "Jost, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.03em",
            }}
          />

          <button
            type="submit"
            className="px-7 py-3.5 text-black transition-all duration-300 hover:bg-[#B8962F]"
            style={{
              background: "#C9A962",
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
            }}
          >
            DOWNLOAD BROCHURE
          </button>
        </form>
      </div>

      {/* Exact WP Style DISCOVER */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <span
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          DISCOVER
        </span>

        <div className="discover-line mt-4"></div>
      </div>

    </section>
  );
}
