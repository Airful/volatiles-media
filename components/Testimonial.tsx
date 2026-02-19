export default function Testimonial() {
  return (
    <section
      className="relative bg-black py-28 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000 0%, #0d0d0d 50%, #000 100%)",
      }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(120px, 18vw, 220px)",
          color: "rgba(201,169,98,0.08)",
          lineHeight: 1,
          fontWeight: 300,
        }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-8 md:px-12 text-center">
        {/* Large quote mark above */}
        <div
          className="flex justify-center mb-8"
          aria-hidden="true"
        >
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 22V13.2C0 9.86667 0.666667 7.06667 2 4.8C3.4 2.53333 5.4 0.866667 8 0L10 3.2C7.93333 3.86667 6.36667 5 5.3 6.6C4.3 8.2 3.8 10.1333 3.8 12.4H8V22H0ZM16 22V13.2C16 9.86667 16.6667 7.06667 18 4.8C19.4 2.53333 21.4 0.866667 24 0L26 3.2C23.9333 3.86667 22.3667 5 21.3 6.6C20.3 8.2 19.8 10.1333 19.8 12.4H24V22H16Z"
              fill="rgba(201,169,98,0.35)"
            />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote
          className="text-white leading-relaxed mb-8"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(18px, 2.8vw, 28px)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "0.01em",
            lineHeight: "1.65",
          }}
        >
          The volatiles panel in our yacht&apos;s master suite has become the
          conversation piece of every voyage. It&apos;s not lighting—it&apos;s
          living art.
        </blockquote>

        {/* Attribution */}
        <p
          className="text-[#808080]"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            letterSpacing: "0.2em",
          }}
        >
          90m Lürssen Yacht Installation
        </p>
      </div>
    </section>
  );
}
