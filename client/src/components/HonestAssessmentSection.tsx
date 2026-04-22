/**
 * HonestAssessmentSection — "Why Royalty" differentiator
 * id="why-royalty"
 * bg-[#F7F7F5], editorial proof blocks (no icon-in-circle), no floating badge
 * Blue CTA, DM Sans 700 headlines
 */

const PROOF_BLOCKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D6CC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    label: "We handle small repairs — not just big replacements",
    desc: "No job is too small. If a repair is the right call, that's what we recommend.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D6CC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Free inspection with full photo documentation",
    desc: "We document everything and give you a clear written assessment.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3D6CC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: "Insurance claim guidance from start to finish",
    desc: "We work directly with adjusters and have former claims professionals on staff.",
  },
];

export default function HonestAssessmentSection() {
  const scrollToForm = () => {
    document.getElementById("bottom-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-royalty" style={{ background: "#F7F7F5", padding: "80px 0 112px" }}>
      <div
        className="w-full px-6"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="mb-4"
              style={{
                color: "#3D6CC0",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              WHY HOMEOWNERS CHOOSE ROYALTY
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                color: "#0F1B2D",
                lineHeight: 1.25,
                marginBottom: "24px",
                fontFamily: "var(--font-body)",
              }}
            >
              We Only Recommend What Your Roof Actually Needs.
            </h2>

            <p
              style={{
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: "16px",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
              }}
            >
              Most roofing companies push replacements. We don't. If your roof can be repaired, we'll tell you that — and do the repair right. If it needs a full replacement, we'll explain exactly why. You get a straight answer, not a sales pitch.
            </p>

            <p
              style={{
                color: "#6B7280",
                lineHeight: 1.7,
                marginBottom: "40px",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
              }}
            >
              We're not a storm-chasing crew that rolls in after a hailstorm and disappears. Royalty has been rooted in Omaha since 2010. When you call us, you talk to someone who lives here.
            </p>

            {/* Editorial proof blocks */}
            <div style={{ marginBottom: "40px" }}>
              {PROOF_BLOCKS.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="flex gap-3"
                  style={{ marginBottom: "24px" }}
                >
                  <div className="shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <div
                      style={{
                        color: "#0F1B2D",
                        fontWeight: 600,
                        fontSize: "14px",
                        fontFamily: "var(--font-body)",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        color: "#6B7280",
                        fontSize: "14px",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center"
              style={{
                background: "#3D6CC0",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d5aad")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3D6CC0")}
            >
              Schedule a Free Inspection
            </button>
          </div>

          {/* Right: Photo — no floating badge */}
          <div>
            <img
              src="/manus-storage/hero-bg_350164c4.webp"
              alt="Royalty Roofing crew completing a residential roofing project in Omaha"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
