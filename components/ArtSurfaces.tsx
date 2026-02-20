"use client";

import Image from "next/image";
import ParallaxElement from "./ParallaxElement";

const materials = [
  {
    label: "Wood",
    src: "/images/Wood-Hover.webp",
    alt: "Premium burl wood surface texture",
  },
  {
    label: "Stone",
    src: "/images/Stone-Hover_500x500.webp",
    alt: "Exotic marble stone surface texture",
  },
  {
    label: "Concrete",
    src: "/images/Concrete-Hover.webp",
    alt: "High-tech concrete surface texture",
  },
  {
    label: "Mosaic",
    src: "/images/Mosaic-Hover.webp",
    alt: "Glass mosaic tile surface texture",
  },
];

export default function ArtSurfaces() {
  return (
    <section
      id="materials"
      className="relative bg-black py-28 md:py-36 max-[500px]:py-[92px] overflow-hidden"
    >
      {/* Background glow top — drifts upward as section enters view */}
      <ParallaxElement
        speed={0.2}
        baseTransform="translateX(-50%)"
        className="absolute top-0 left-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,169,98,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            className="text-[#C9A962] mb-5"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.4em",
              fontWeight: 300,
            }}
          >
            Curated Materials
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Exclusive Art Surfaces
          </h2>
          <p
            className="text-[#B3B3B3] mt-4"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            Select from our curated range of high-end materials.
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {materials.map((mat) => (
            <MaterialCard key={mat.label} {...mat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MaterialCard({
  label,
  src,
  alt,
}: {
  label: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="group flex flex-col gap-4">
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      {/* Label */}
      <p
        className="text-white font-light"
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "18px",
          fontWeight: 300,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </p>
    </div>
  );
}
