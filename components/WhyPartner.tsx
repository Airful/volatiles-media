import Image from "next/image";
import ParallaxElement from "./ParallaxElement";

const partnerCards = [
  {
    type: "video",
    title: "Interactive Light Art",
    desc: "Our patented technology hides thousands of micro-LEDs behind luxurious surfaces and reacts to touch, creating dynamic light art that transforms any space.",
    src: "/images/1.webp",
    videoSrc: "/videos/product-demo.mp4",
  },
  {
    type: "image",
    title: "Premium Materials",
    desc: "Choose from curated mosaics, wood, stone and high-tech concrete sourced from the finest artisans in Italy, France and around the world.",
    src: "/images/2.webp",
  },
  {
    type: "image",
    title: "Award-Winning Innovation",
    desc: "Volatiles has been recognised by leading design journals and showcased on international platforms for pioneering luminous surfaces.",
    src: "/images/3.webp",
  },
  {
    type: "image",
    title: "Custom Solutions",
    desc: "Every installation is tailored to your project's specifications – whether integrated into walls, ceilings or custom furnishings.",
    src: "/images/1.webp",
  },
];

export default function WhyPartner() {
  return (
    <section id="partner" className="relative bg-black py-24 md:py-32 max-[500px]:py-[76px] overflow-hidden">
      {/* Background glow - drifts with scroll for depth */}
      <ParallaxElement
        speed={0.18}
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(201,169,98,0.05) 0%, transparent 65%)",
        }}
      />
      
      {/* Left side glow */}
      <ParallaxElement
        speed={0.12}
        direction="down"
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(201,169,98,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <h2
            className="text-white mb-0
            "
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            Why Partner with Volatiles?
          </h2>
          <p
            className="text-[#808080]"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
          >
            Leverage innovation, materials and artistry that set your projects apart.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCards.map((card) => (
            <PartnerCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({
  type,
  title,
  desc,
  src,
  videoSrc,
}: {
  type: string;
  title: string;
  desc: string;
  src: string;
  videoSrc?: string;
}) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(201,169,98,0.2)]"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Media */}
      <div className="relative w-full overflow-hidden h-[280px] min-[600px]:h-[445px]">
        {type === "video" && videoSrc ? (
          <video
            src={videoSrc}
            poster={src}
            controls
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
        <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/8 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 p-5">
        <h3
          className="text-white"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "24px",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#808080] leading-relaxed"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: "28px",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
