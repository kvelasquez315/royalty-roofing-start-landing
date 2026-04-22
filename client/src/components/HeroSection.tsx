/**
 * HeroSection — Full-viewport hero
 * New copy: "Honest Roofing. Done Right, Every Time."
 * Blue checkmarks, no gold, clean phone treatment
 * Form card: glass on dark bg, blue submit button
 */
import EstimateForm from "./EstimateForm";

const TRUST_ITEMS = [
  "Free Inspection, No Obligation",
  "Best of Omaha — 7 Years Running",
  "We Handle Your Insurance Claim",
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: "url(/manus-storage/house-front_68893f8b.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(15,27,45,0.92) 0%, rgba(15,27,45,0.82) 55%, rgba(15,27,45,0.65) 100%)",
        }}
      />

      <div
        className="relative w-full px-6 py-16 md:py-20"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: Headline + trust */}
          <div>
            <div
              className="mb-4"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "var(--font-body)",
              }}
            >
              OMAHA'S TRUSTED ROOFER SINCE 2010
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "20px",
                fontFamily: "var(--font-body)",
              }}
            >
              Honest Roofing.
              <br />
              Done Right, Every Time.
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "28px",
                maxWidth: "520px",
                fontFamily: "var(--font-body)",
              }}
            >
              We've been roofing and siding Omaha homes since 2010. We tell you exactly what your roof needs — repair or full replacement — and we back every job with a written warranty. No pressure. No upsell.
            </p>

            {/* Trust row */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8"
            >
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 500, fontFamily: "var(--font-body)" }}
                >
                  {/* Blue checkmark SVG */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#3D6CC0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Clean phone treatment */}
            <a
              href="tel:4022168850"
              className="inline-flex items-center gap-2"
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "20px",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              (402) 216-8850
            </a>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <EstimateForm variant="glass" />
          </div>
        </div>
      </div>
    </section>
  );
}
