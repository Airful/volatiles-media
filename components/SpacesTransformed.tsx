"use client";

import React from "react";
import Image from "next/image";
import ParallaxElement from "./ParallaxElement";

const applications = [
  {
    icon: "square",
    title: "Private Residences",
    desc: "Living rooms, bedrooms, bathrooms, home theaters & private wellness areas",
  
  },
  {
    icon: "halfcircle",
    title: "Luxury Hospitality",
    desc: "5-star hotels, boutique properties, spas, wellness centers & fine dining",

  },
  {
    icon: "share",
    title: "Corporate Spaces",
    desc: "Executive lobbies, boardrooms, flagship stores & brand experience centers",

  },
  {
    icon: "tablet",
    title: "Marine & Yacht",
    desc: "Superyacht interiors, cruise ship suites & maritime entertainment spaces",
  },
  {
    icon: "gear",
    title: "Medical & Wellness",
    desc: "Premium clinics, private practices & therapeutic environments",
  },
  {
    icon: "person",
    title: "Bespoke Projects",
    desc: "Custom dimensions, unique materials & special installations",
  },
];

export default function SpacesTransformed() {
  return (
    <section id="applications" className="relative bg-[#141414] py-24 md:py-32 max-[500px]:py-[76px] overflow-hidden">
      {/* Top glow — drifts up as section enters view */}
      <ParallaxElement
        speed={0.2}
        className="absolute top-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,169,98,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-[#C9A962] mb-0"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "15px",
              letterSpacing: "0.4em",
              fontWeight: 300,
            }}
          >
            Applications
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Spaces Transformed
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {applications.map((app, i) => (
            <ApplicationCard key={app.title} {...app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationCard({
  icon,
  title,
  desc,
  image,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  image?: string;
  index: number;
}) {
  const borderRight = (index + 1) % 3 !== 0;
  const borderBottom = index < 3;

  return (
    <div
      className="flex flex-col items-center text-center transition-colors duration-300 hover:bg-white/[0.02] group overflow-hidden"
      style={{
        borderRight: borderRight ? "1px solid rgba(255,255,255,0.07)" : "none",
        borderBottom: borderBottom ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      {/* Image */}
      {image && (
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Icon + text */}
      <div className="flex flex-col items-center px-8 py-12 w-full">
      {/* Icon */}
      <div className="mb-6 text-white group-hover:text-[#C9A962] transition-colors duration-300">
        <AppIcon icon={icon} />
      </div>

      {/* Title */}
      <h3
        className="text-white mb-4"
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "30px",
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        {title}
      </h3>

      {/* Desc */}
      <p
        className="text-[#808080] leading-relaxed"
        style={{
          fontFamily: "Jost, sans-serif",
          fontSize: "17px",
          fontWeight: 300,
          letterSpacing: "0.02em",
          lineHeight: "1.2",
        }}
      >
        {desc}
      </p>
      </div>
    </div>
  );
}

type AppIconProps = {
  icon: string;
};

function AppIcon({ icon = "square" }: AppIconProps) {
  const icons: Record<string, React.ReactNode> = {
    square: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1" y="1" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    halfcircle: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 1C5.477 1 1 5.477 1 11s4.477 10 10 10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
        <path d="M11 1v20" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    share: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    tablet: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="1" width="15" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="9.5" cy="18" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    gear: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    person: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  };

  return icons[icon] || icons.square;
}
