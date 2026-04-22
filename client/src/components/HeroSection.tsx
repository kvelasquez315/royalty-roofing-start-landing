/**
 * HeroSection — Royalty Roofing
 * Design: Moose-inspired — massive Bebas Neue headline, full-viewport house photo,
 * dark overlay, trust badge cluster left, glass form right
 * CDN: house-front_bb261291.webp
 */
import EstimateForm from "./EstimateForm";

const HOUSE_FRONT = "/manus-storage/house-front_d3955cbd.webp";

const badgeStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "8px",
  padding: "8px 12px",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        paddingTop: "110px",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HOUSE_FRONT})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient overlay — heavier left, lighter right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(6,12,24,0.85) 0%, rgba(6,12,24,0.68) 45%, rgba(6,12,24,0.40) 100%)",
        }}
      />

      {/* Content grid */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 28px 72px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "48px",
          alignItems: "end",
        }}
        className="hero-grid"
      >
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "16px",
            }}
          >
            Omaha's Trusted Roofer Since 2010
          </p>

          {/* Hero headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.5vw, 68px)",
              lineHeight: 1.0,
              color: "white",
              margin: "0 0 24px",
              letterSpacing: "0.01em",
            }}
          >
            WE INSPECT YOUR ROOF FOR FREE AND ONLY RECOMMEND A REPLACEMENT IF YOU TRULY NEED ONE.
          </h1>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "19px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.65,
              maxWidth: "500px",
              marginBottom: "28px",
            }}
          >
            Most roofers show up and quote a full replacement. We get on your roof, document everything with photos, and give you an honest written assessment — if a repair will do the job, that's what we'll recommend. Omaha's most trusted roofer since 2010.
          </p>

          {/* Trust badge cluster */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "0",
            }}
          >
            {/* Google rating */}
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>4.9 · 500+ Reviews</span>
              </div>
            </div>

            {/* Best of Omaha */}
            <div style={badgeStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)", lineHeight: 1.2 }}>Best of Omaha</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>7 Years Running</div>
              </div>
            </div>

            {/* BBB A+ Rating */}
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3D6CC0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "white", fontFamily: "var(--font-body)", lineHeight: 1.2 }}>BBB Accredited</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)" }}>A+ Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div style={{ paddingBottom: "8px" }}>
          <EstimateForm variant="glass" />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-bottom: 40px !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
