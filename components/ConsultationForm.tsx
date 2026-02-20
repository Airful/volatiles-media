"use client";

import { useState } from "react";
import Link from "next/link";
import ParallaxElement from "./ParallaxElement";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: "", email: "", vision: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", vision: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* Consultation section */}
      <section
        id="enquire"
        className="relative bg-[#141414] py-24 md:py-32 max-[500px]:py-[76px] overflow-hidden"
      >
        {/* Top glow — soft parallax depth */}
        <ParallaxElement
          speed={0.2}
          baseTransform="translateX(-50%)"
          className="absolute top-0 left-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(201,169,98,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h2
                className="text-white leading-tight mb-6"
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(38px, 5vw, 60px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                Begin Your
                <br />
                <em style={{ fontStyle: "italic", color: "#C9A962" }}>
                  Consultation
                </em>
              </h2>

              <p
                className="text-[#B3B3B3] leading-relaxed mb-10"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "19px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: "1.4",
                  maxWidth: "600px",
                }}
              >
                Each volatiles installation is crafted to order. Share your
                vision with us, and our specialists will guide you through
                materials, dimensions, and possibilities.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="px-7 py-3.5 text-white border border-white/40 hover:border-[#C9A962] hover:text-[#C9A962] hover:scale-[1.03] transition-all duration-300"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  borderRadius: "0px",
                }}
              >
                DOWNLOAD BROCHURE
              </button>
            </div>

            {/* Right: Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-white/50"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    fontWeight: 300,
                  }}
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-white/80 placeholder-white/20 text-sm font-light"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(201,169,98,0.4)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-white/50"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    fontWeight: 300,
                  }}
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-white/80 placeholder-white/20 text-sm font-light"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(201,169,98,0.4)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="vision"
                  className="text-white/50"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    fontWeight: 300,
                  }}
                >
                  TELL US ABOUT YOUR VISION
                </label>
                <textarea
                  id="vision"
                  name="vision"
                  rows={7}
                  value={form.vision}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-white/80 placeholder-white/20 text-sm font-light resize-none"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "2px",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(201,169,98,0.4)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)";
                  }}
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p
                  className="text-red-400 text-center"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                  }}
                >
                  {errorMsg}
                </p>
              )}

              {/* Success message */}
              {status === "success" && (
                <p
                  className="text-[#C9A962] text-center"
                  style={{
                    fontFamily: "Jost, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  Thank you — we will be in touch shortly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 text-black font-medium transition-all duration-300 hover:bg-[#B8962F] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  background: "#C9A962",
                  borderRadius: "2px",
                }}
              >
                {status === "loading" ? "SENDING..." : status === "success" ? "SENT" : "SUBMIT ENQUIRY"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "#000",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <FooterLogo />
             <img  src="/images/Volatiles-Logo-white-1.svg" />
            </div>

            {/* Copyright */}
            <p
              className="text-[#666] text-center"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              © 2025 volatiles technologies GmbH, Berlin
            </p>

            {/* Links */}
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-[#C9A962] transition-colors duration-300"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                }}
              >
                PRIVACY
              </Link>
              <Link
                href="/imprint"
                className="text-white/50 hover:text-[#C9A962] transition-colors duration-300"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                }}
              >
                IMPRINT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


function FooterLogo() {
  return null;
}