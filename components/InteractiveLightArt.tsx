"use client";

import ParallaxElement from "./ParallaxElement";

export default function InteractiveLightArt() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video — extended height so parallax drift never reveals edges */}
      <ParallaxElement
        speed={0.18}
        className="absolute left-0 right-0 w-full"
        style={{ top: "-8%", height: "116%" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://mediumaquamarine-cheetah-559193.hostingersite.com/wp-content/uploads/2025/12/Hero_Skyline_12.mp4"
            type="video/mp4"
          />
        </video>
      </ParallaxElement>

      {/* Dark Overlay (Same as WP feel) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Heading */}
        <h1
          className="text-white"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(48px, 6vw, 80px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Interactive Light Art
        </h1>

        {/* Paragraph */}
        <p
          className="text-white/80 mt-4"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          Change the atmosphere. Change the moment.
        </p>

        {/* Button */}
        <a
          href="#enquire"
          className="mt-10 px-10 py-4 border border-white/70 text-white transition-all duration-300 hover:border-[#C9A962] hover:bg-[#C9A962] hover:text-black hover:scale-[1.03]"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
          }}
        >
          REQUEST PRIVATE VIEWING
        </a>

      </div>
    </section>
  );
}
