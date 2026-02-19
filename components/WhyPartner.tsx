import Image from "next/image";

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
    <section id="partner" className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 58px)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Why Partner with Volatiles?
          </h2>
          <p
            className="text-[#808080]"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "13px",
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
      className="flex flex-col overflow-hidden rounded-sm"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Media */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
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
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 p-5">
        <h3
          className="text-white"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "17px",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#808080] leading-relaxed"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: "1.75",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
