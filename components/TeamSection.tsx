import Image from "next/image";

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
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-8 md:px-12 text-center">
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
            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.2em",
          }}
        >
          Let&apos;s start the journey together
        </p>

        {/* Team cards */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-10 md:gap-16">
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
      className="flex flex-col items-center gap-5 p-8 flex-1"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      {/* Circular photo */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "1.5px solid rgba(201,169,98,0.3)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h3
          className="text-[#C9A962]"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "22px",
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
            fontSize: "13px",
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
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            {phone}
          </a>
        ))}
      </div>
    </div>
  );
}
