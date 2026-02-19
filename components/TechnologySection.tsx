const features = [
  {
    title: "Touch-Responsive",
    desc: "Invisible capacitive sensors transform the surface into an interactive canvas",
  },
  {
    title: "App-Controlled",
    desc: "25 curated light scenes or stream your own media via iOS",
  },
  {
    title: "Smart Home Integration",
    desc: "Seamless KNX compatibility for complete automation",
  },
];

export default function TechnologySection() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: glowing panel visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ width: "100%", maxWidth: "460px", aspectRatio: "3/4" }}
            >
              {/* Outer frame */}
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.02)",
                }}
              />
              {/* Inner panel */}
              <div
                className="absolute inset-4 rounded-sm overflow-hidden"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute"
                  style={{
                    bottom: "20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "55%",
                    height: "35%",
                    background:
                      "radial-gradient(ellipse at center, rgba(201,169,98,0.45) 0%, rgba(201,169,98,0.15) 45%, transparent 75%)",
                    filter: "blur(18px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div>
            <h2
              className="text-white mb-8 leading-tight"
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 58px)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
              }}
            >
              Technology That{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#C9A962",
                }}
              >
                Disappears
              </em>
            </h2>

            <p
              className="text-[#B3B3B3] mb-10 leading-relaxed"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                lineHeight: "1.8",
              }}
            >
              When inactive, you see only the material—stone, wood, glass,
              concrete. When awakened, 16.7 million colors dance behind the
              surface, responding to your touch, your mood, your moment.
            </p>

            {/* Feature cards */}
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} desc={f.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-5 p-5 rounded-sm"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Gold star icon */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: "36px",
          height: "36px",
          background: "rgba(201,169,98,0.08)",
          border: "1px solid rgba(201,169,98,0.3)",
          borderRadius: "2px",
        }}
      >
        <StarIcon />
      </div>
      <div>
        <h3
          className="text-white mb-1.5"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[#B3B3B3] leading-relaxed"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.02em",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0L7.9 5.9L13.5 7L7.9 8.1L7 14L6.1 8.1L0.5 7L6.1 5.9L7 0Z"
        fill="#C9A962"
      />
    </svg>
  );
}
