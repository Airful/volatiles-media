import ParallaxElement from "./ParallaxElement";

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
    <section className="relative bg-[#141414] py-24 md:py-32 max-[500px]:py-[76px] overflow-hidden">
      {/* Background glow - drifts with scroll for depth */}
      <ParallaxElement
        speed={0.15}
        baseTransform="translateX(-50%)"
        className="absolute top-1/2 left-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,98,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom mx-auto px-[15px] max-w-[1444px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 items-center">
          {/* Left: glowing panel visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ width: "100%", maxWidth: "530px", aspectRatio: "3/4" }}
            >
              {/* Outer frame with subtle border */}
              <div
                className="absolute inset-0 rounded-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "linear-gradient(145deg, #0a0a0a 0%, #151515 100%)",
                }}
              />
              {/* Inner padding frame effect */}
              <div
                className="absolute inset-[12px] rounded-sm overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #0c0c0c 0%, #1a1a1a 100%)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                {/* Soft gold radial glow effect - matches WordPress */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(201,169,98,0.25) 0%, rgba(0,0,0,0.9) 70%)",
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
                fontSize: "clamp(38px, 5vw, 62px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Technology That <br></br>{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#C9A962",
                  fontSize: "clamp(40px, 5.2vw, 66px)",
                }}
              >
                Disappears
              </em>
            </h2>

            <p
              className="text-white mb-10 leading-relaxed"
              style={{
                fontFamily: "Jost, sans-serif",
                fontSize: "19px",
                fontWeight: 300,
                letterSpacing: "0em",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.65)",
              
              }}
            >
              When inactive, you see only the material—stone, wood, glass,
              concrete. When awakened, 16.7 million colors dance behind the
              surface, responding to your touch, your mood, your moment.
            </p>

            {/* Feature cards */}
            <div className="flex flex-col gap-5">
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
      className="flex items-start gap-4 p-6 rounded-md"
      style={{
        background: "#111",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Left small square icon container with gold border */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: "45px",
          height: "45px",
          border: "1px solid #C9A962",
          borderRadius: "2px",
          marginRight: "10px",
        }}
      >
        <StarIcon />
      </div>
      <div>
        <h3
          className="text-white mb-1.5"
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "25px",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-white leading-relaxed"
          style={{
            fontFamily: "Jost, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.6)",
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
      width="12"
      height="12"
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
