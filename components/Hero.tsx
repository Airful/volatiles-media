"use client";

import { useState } from "react";
import ParallaxElement from "./ParallaxElement";
import { handleBrochureDownload } from "@/lib/downloadBrochure";

type Status = "idle" | "loading" | "success" | "error";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleDownload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      await handleBrochureDownload(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      {/* Background Image */}
    

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Subtle radial glow — drifts slightly on scroll for depth */}
      <ParallaxElement
        speed={0.25}
        baseTransform="translateX(-50%) translateY(-50%)"
        className="absolute top-1/2 left-1/2 w-[600px] h-[400px] pointer-events-none"
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
            fontSize: "clamp(13px, 1.5vw, 20px)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            maxWidth: "440px",
          }}
        >
          Interactive LED art panels fused with the world&apos;s finest
          materials.Invisible technology. Visible luxury.
        </p>

        {/* Form */}
        <form
          onSubmit={handleDownload}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-[560px]"
        >
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email"
              className="w-full px-5 py-3.5 text-white/80 placeholder-white/30 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${error ? "#ef4444" : "rgba(255,255,255,0.25)"}`,
                fontFamily: "Jost, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.03em",
              }}
            />
            {error && (
              <p
                className="mt-2 text-left text-red-400 text-xs"
                style={{
                  fontFamily: "Jost, sans-serif",
                }}
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-7 py-3.5 text-black transition-all duration-300 hover:bg-[#B8962F] hover:scale-[1.03] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: "#C9A962",
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              letterSpacing: "0.15em",
            }}
          >
            {status === "loading"
              ? "SENDING..."
              : status === "success"
              ? "DOWNLOADED"
              : "DOWNLOAD BROCHURE"}
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
