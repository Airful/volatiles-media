"use client";

import Image from "next/image";
import ParallaxElement from "./ParallaxElement";

const materials = [
  {
    title: "Wood",
    description: "FSC-certified translucent hardwoods",
    image: "/images/Wood-Hover.webp",
    alt: "Premium translucent hardwood",
  },
  {
    title: "Stone",
    description: "Calacatta, Carrara & Estremoz marble",
    image: "/images/Stone-Hover_500x500.webp",
    alt: "Luxury marble surface",
  },
  {
    title: "Concrete",
    description: "Light-transmitting concrete with fiber optics",
    image: "/images/Concrete-Hover.webp",
    alt: "Innovative light-transmitting concrete",
  },
  {
    title: "Mosaic",
    description: "Italian glass tiles in ten hand-selected hues",
    image: "/images/Mosaic-Hover.webp",
    alt: "Handcrafted Italian glass mosaic",
  },
];

export default function CuratedMaterials() {
  return (
    <section className="relative bg-black w-full py-20 md:py-28 max-[500px]:py-[60px] overflow-hidden">
      {/* Background glow - drifts with scroll for depth */}
      <ParallaxElement
        speed={0.15}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top center, rgba(201,169,98,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom mx-auto px-[15px] max-w-[1444px]">
        {/* Centered Heading Block */}
        <div className="text-center mb-16 md:mb-20">
          {/* Small Label */}
          <p
            className="text-[#C9A962] uppercase mb-1"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "15px",
              letterSpacing: "0.35em",
              fontWeight: 600,
            }}
          >
            Curated Materials
          </p>

          {/* Main Heading */}
          <h2
            className="text-white mb-1"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Exclusive Art Surfaces
          </h2>

          {/* Subtitle */}
          <p
            className="text-white"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "clamp(13px, 1.5vw, 18px)",
              fontWeight: 300,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            Select from our curated range of high-end materials.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <MaterialCard key={index} material={material} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Material {
  title: string;
  description: string;
  image: string;
  alt: string;
}

function MaterialCard({ material }: { material: Material }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(201,169,98,0.25)] hover:-translate-y-1"
      style={{
        background: "linear-gradient(180deg, rgba(201,169,98,0.12) 0%, rgba(0,0,0,0.6) 100%)",
        boxShadow: "0 0 40px rgba(201, 169, 98, 0.05)",
        border: "1px solid rgba(201,169,98,0.1)",
      }}
    >
      {/* Permanent subtle glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 60px rgba(201, 169, 98, 0.08)",
        }}
      />

      {/* Image container with dark gold gradient background */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1 / 1",
          background: "linear-gradient(145deg, rgba(30, 25, 15, 0.9) 0%, rgba(15, 12, 8, 0.95) 100%)",
        }}
      >
        <Image
          src={material.image}
          alt={material.alt}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/10 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-10">
        <h3
          className="text-white font-light mb-2"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          {material.title}
        </h3>
        <p
          className="text-white"
          style={{
            fontFamily: '"Jost", system-ui, sans-serif',
            fontSize: "clamp(12px, 1.5vw, 14px)",
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.6)",
            letterSpacing: "0.01em",
          }}
        >
          {material.description}
        </p>
      </div>
    </div>
  );
}

