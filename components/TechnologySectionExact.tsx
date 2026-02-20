"use client";

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

export default function TechnologySectionExact() {
  return (
    <section className="relative bg-[#141414] py-24 md:py-32 overflow-hidden">
      <div 
        className="mx-auto px-[15px]"
        style={{ maxWidth: "1444px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left: glowing panel visual */}
          <div className="flex items-center justify-center">
            <div
              className="relative"
              style={{ 
                width: "100%", 
                maxWidth: "530px", 
                aspectRatio: "3/4",
              }}
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
            {/* Heading: "Technology That" */}
            <h2
              className="text-white mb-8 leading-tight"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "clamp(38px, 5vw, 62px)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
              }}
            >
              Technology That <br></br>{" "}
              {/* Second line italic gold word: "Disappears" */}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#C9A962",
                  fontSize: "clamp(40px, 5.2vw, 66px)",
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 300,
                }}
              >
                Disappears
              </em>
            </h2>

            {/* Paragraph - same width and same opacity */}
            <p
              className="text-white mb-10 leading-relaxed"
              style={{
                fontFamily: '"Jost", sans-serif',
                fontSize: "15px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "520px",
              }}
            >
              When inactive, you see only the material—stone, wood, glass,
              concrete. When awakened, 16.7 million colors dance behind the
              surface, responding to your touch, your mood, your moment.
            </p>

            {/* Three feature cards */}
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

/**
 * Feature Card Component
 * - Same border thickness
 * - Same card padding
 * - Same icon square
 * - Same gold tone (#C9A962)
 * - Same rounded corners
 */
function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="flex items-start gap-4"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "2px",
        padding: "24px",
      }}
    >
      {/* Left small square icon container with gold border */}
      <div
        className="shrink-0 flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid #C9A962",
          borderRadius: "2px",
          backgroundColor: "transparent",
        }}
      >
        <StarIcon />
      </div>
      
      <div>
        {/* Card title */}
        <h3
          className="text-white"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: "1.3",
            marginBottom: "6px",
          }}
        >
          {title}
        </h3>
        
        {/* Card description */}
        <p
          className="text-white leading-relaxed"
          style={{
            fontFamily: '"Jost", sans-serif',
            fontSize: "13px",
            fontWeight: 300,
            letterSpacing: "0.02em",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

/**
 * Star Icon Component
 * Gold star matching #C9A962
 */
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

