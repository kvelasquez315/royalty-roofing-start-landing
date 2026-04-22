/**
 * HonestAssessmentSection — "Why Royalty" differentiator
 * id="why-royalty"
 * - Light off-white bg (#F5F5F3)
 * - Left: Bebas Neue large headline + DM Sans body + proof blocks + CTA
 * - Right: aerial rooftop photo with truck
 * - No gold, no icon-in-circle, no floating badge
 */

const HERO_BG = "/manus-storage/hero-bg_0ebd1de5.webp";

const PROOF_BLOCKS = [
  {
    label: "Free roof inspection: we get on the roof, not just look from the driveway",
    desc: "We physically inspect every section, document everything with photos, and give you a written assessment. You see exactly what we see.",
  },
  {
    label: "We quote repairs first, not replacements",
    desc: "Most companies push full replacements because the margin is higher. If your roof can be repaired, we'll tell you that and do the repair right.",
  },
  {
    label: "Storm damage? We handle the entire insurance claim",
    desc: "We work directly with your adjuster from first contact to final payment. You don't have to fight the insurance company alone.",
  },
  {
    label: "Every job backed by a written workmanship warranty",
    desc: "We stand behind our work. Every repair and replacement comes with a written warranty, not just a handshake.",
  },
];

export default function HonestAssessmentSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-royalty" style={{ background: "#F5F5F3", padding: "96px 0" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="why-grid"
      >
        {/* LEFT: Text */}
        <div>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3D6CC0",
              marginBottom: "14px",
            }}
          >
            Why Homeowners Choose Royalty
          </p>

          {/* Bebas Neue headline */}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#0A1220",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            WE COME TO YOUR HOME, GET ON YOUR ROOF, AND GIVE YOU A STRAIGHT ANSWER ON WHAT IT<br />
            <span style={{ color: "#3D6CC0" }}>ACTUALLY NEEDS.</span>
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "#4B5563",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "520px",
            }}
          >
            Most roofing companies skip the inspection and go straight to quoting a replacement. We don't. We get on your roof, document what we find, and give you a straight answer: repair or replace. No pressure, no upsell, no guessing.
          </p>

          {/* Proof blocks */}
          <div style={{ marginBottom: "40px" }}>
            {PROOF_BLOCKS.map(({ label, desc }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: i < PROOF_BLOCKS.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    flexShrink: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "42px",
                    lineHeight: 1,
                    color: "#3D6CC0",
                    opacity: 0.55,
                    marginTop: "0px",
                    minWidth: "52px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#0A1220",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "#6B7280",
                      lineHeight: 1.65,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            style={{
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 32px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "background 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Schedule a Free Inspection →
          </button>
        </div>

        {/* RIGHT: Photo */}
        <div>
          <img
            src={HERO_BG}
            alt="Royalty Roofing crew completing a residential roofing project in Omaha"
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
            }}
          />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
