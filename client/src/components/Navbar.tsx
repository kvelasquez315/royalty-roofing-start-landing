/**
 * Navbar — Fixed top, full-width, dark navy
 * Three zones: logo left | anchor links center (desktop) | phone + CTA right
 * Design: #0F1B2D bg, #3D6CC0 CTA, DM Sans, no gold
 */
export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center"
      style={{
        background: "rgba(15,27,45,0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-full flex items-center justify-between px-6"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        {/* Left: Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/manus-storage/logo_5194693c.png"
            alt="Royalty Roofing and Siding"
            style={{ height: "36px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Center: Anchor links (desktop only) */}
        <div className="hidden lg:flex items-center gap-1">
          {[
            { label: "Reviews", id: "reviews" },
            { label: "Our Team", id: "team" },
            { label: "Why Royalty", id: "why-royalty" },
            { label: "Get Estimate", id: "bottom-form" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                padding: "6px 16px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right: Phone + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:4022168850"
            className="hidden sm:block transition-colors"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font-body)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            (402) 216-8850
          </a>
          <button
            onClick={() => scrollTo("bottom-form")}
            style={{
              background: "#3D6CC0",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d5aad")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#3D6CC0")}
          >
            Free Estimate
          </button>
        </div>
      </div>
    </nav>
  );
}
