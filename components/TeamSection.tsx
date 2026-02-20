import Image from "next/image";
import ParallaxElement from "./ParallaxElement";

const team = [
  {
    name: "Felix Mreiche",
    email: "Felix.mreiche@volatiles.de",
    phones: ["+34 627 01 33 93", "+49 0 171 3000 185"],
    src: "/images/felix.jpeg",
    alt: "Felix Mreiche - Mediterranean & Southern Europe",
  },
  {
    name: "Olia Terentieva",
    email: "Olia.terentieva@volatiles.de",
    phones: ["+34 687 38 18 13"],
    src: "/images/Olia.jpeg",
    alt: "Olia Terentieva - Mediterranean & Southern Europe",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-black pb-24 md:pb-32 pt-0 max-[500px]:pb-[86px] overflow-hidden">
      {/* Background glow - drifts with scroll for depth */}
      <ParallaxElement
        speed={0.2}
        className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(201,169,98,0.06) 0%, transparent 65%)",
        }}
      />
      
      {/* Bottom glow */}
      <ParallaxElement
        speed={0.15}
        direction="down"
        className="absolute bottom-0 right-0 w-[400px] h-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(201,169,98,0.04) 0%, transparent 65%)",
        }}
      />

   <div className="container-custom text-center">
        {/* Header */}
        <h2
          className="text-white mb-3"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Team Mediterranean & Southern Europe
        </h2>
        <p
          className="text-[#808080] mb-16 md:mb-20"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            letterSpacing: "0.2em",
          }}
        >
          Let&apos;s start the journey together
        </p>

        {/* Team cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-10 md:gap-16 w-full">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  name,
  email,
  phones,
  src,
  alt,
}: {
  name: string;
  email: string;
  phones: string[];
  src: string;
  alt: string;
}) {
  return (
    <div
      className="group flex flex-col items-center gap-5 p-8 flex-1 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,169,98,0.18)]"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        maxWidth: "502px",
      }}
    >
      {/* Circular photo */}
      <div
        className="relative overflow-hidden shrink-0 w-full h-[300px] min-[600px]:w-[73%] min-[600px]:h-[309px] transition-all duration-500 group-hover:shadow-[0_0_0_3px_rgba(201,169,98,0.5)]"
        style={{
          borderRadius: "50%",
          border: "1.5px solid rgba(201,169,98,0.3)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="160px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3
          className="text-[#C9A962]"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "35px",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {name}
        </h3>

        <a
          href={`mailto:${email}`}
          className="text-[#B3B3B3] hover:text-[#C9A962] transition-colors duration-300"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          {email}
        </a>

        {phones.map((phone) => (
          <a
            key={phone}
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-[#B3B3B3] hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              letterSpacing: "0.05em",
              lineHeight: "16px",
            }}
          >
            {phone}
          </a>
        ))}
      </div>
    </div>
  );
}
