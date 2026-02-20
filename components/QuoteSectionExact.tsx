"use client";

export default function QuoteSectionExact() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
        paddingTop: "110px",
        paddingBottom: "120px",
        minHeight: "auto",
      }}
    >
      {/* Very soft gold glow from bottom corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 0% 100%, rgba(201, 169, 98, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 100% 100%, rgba(201, 169, 98, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Large decorative quote mark in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: '"Jost", sans-serif',
          fontSize: "clamp(140px, 20vw, 280px)",
          color: "rgba(201,169,98,0.06)",
          lineHeight: 1,
          fontWeight: 300,
        }}
        aria-hidden="true"
      >
        "
      </div>

      <div 
        className="relative z-10 mx-auto text-center"
        style={{
          maxWidth: "900px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Large gold quotation mark above text */}
        <div 
          className="flex justify-center mb-10" 
          aria-hidden="true"
        >
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "72px",
              color: "rgba(201, 169, 98, 0.35)",
              lineHeight: 1,
              fontWeight: 300,
            }}
          >
            "
          </span>
        </div>

        {/* Main quote text */}
        <blockquote
          className="text-white leading-relaxed mb-10"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "0.01em",
            lineHeight: "1.7",
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 40px auto",
            color: "#FFFFFF",
            wordSpacing: "inherit",
          }}
        >
          The volatiles panel in our yacht&apos;s master suite has become the
          conversation piece of every voyage. It&apos;s not lighting—it&apos;s
          living art.
        </blockquote>

        {/* Bottom caption text */}
        <p
          className="text-center"
          style={{
            fontFamily: '"Jost", sans-serif',
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.22em",
            color: "rgba(255, 255, 255, 0.5)",
            textTransform: "none",
          }}
        >
          90m Lürssen Yacht Installation
        </p>
      </div>
    </section>
  );
}

