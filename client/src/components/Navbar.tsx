/**
 * Navbar - Royalty Roofing
 * - Top announcement bar: blue bg, key trust points
 * - Main bar: near-black (#0A1220), logo left, anchor links center, phone+CTA right
 * - Solid and confident, no blur/transparency
 * CDN: logo-white_d1fb2924.png
 */

const LOGO = "/manus-storage/logo-white_d1fb2924.png";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Announcement bar */}
      <div
        style={{
          background: "#3D6CC0",
          color: "white",
          textAlign: "center",
          padding: "7px 16px",
          fontSize: "12.5px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          letterSpacing: "0.05em",
          lineHeight: 1.4,
        }}
      >
        ★&nbsp; BEST OF OMAHA: ROOFING &amp; SIDING, 7 YEARS RUNNING &nbsp;|&nbsp; FREE ROOF INSPECTION &nbsp;|&nbsp; WE HANDLE YOUR INSURANCE CLAIM
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: "#0A1220",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: "96px",
        }}
      >
        {/* Logo - fills the full nav height, same as royaltyroofing.org */}
        <a href="/" style={{ display: "flex", alignItems: "stretch", flexShrink: 0, textDecoration: "none", padding: "8px 0" }}>
          <img
            src={LOGO}
            alt="Royalty Roofing and Siding"
            style={{ height: "100%", width: "auto", objectFit: "contain", maxWidth: "400px" }}
          />
        </a>

        {/* Center nav links - desktop */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
          className="hidden lg:flex"
        >
          {[
            { label: "Why Royalty", id: "why-royalty" },
            { label: "Reviews", id: "reviews" },
            { label: "Our Team", id: "team" },
            { label: "Get Estimate", id: "bottom-form" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.80)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "0.02em",
                cursor: "pointer",
                padding: "10px 20px",
                borderRadius: "4px",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.80)";
                (e.currentTarget as HTMLButtonElement).style.background = "none";
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: Phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
          <a
            href="tel:4022168850"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "17px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden sm:inline">(402) 216-8850</span>
          </a>

          <button
            onClick={() => scrollTo("bottom-form")}
            style={{
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              padding: "12px 26px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "background 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#2d5aad"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#3D6CC0"; }}
          >
            Free Estimate
          </button>
        </div>
      </nav>
    </header>
  );
}
