/**
 * Navbar - Royalty Roofing
 * - Top announcement bar: blue bg, key trust points (single line on mobile)
 * - Main bar: near-black (#0A1220), big logo left, hamburger on mobile, phone+CTA right on desktop
 * - Mobile: hamburger opens full-width dropdown menu
 */
import { useState } from "react";

const LOGO = "/manus-storage/logo-white_d1fb2924.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const NAV_LINKS = [
    { label: "Why Royalty", id: "why-royalty" },
    { label: "Reviews", id: "reviews" },
    { label: "Our Team", id: "team" },
    { label: "Get Estimate", id: "bottom-form" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
      {/* Announcement bar */}
      <div
        style={{
          background: "#3D6CC0",
          color: "white",
          textAlign: "center",
          padding: "7px 16px",
          fontSize: "12px",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          letterSpacing: "0.04em",
          lineHeight: 1.4,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        className="announcement-bar"
      >
        <span className="hidden sm:inline">★&nbsp; BEST OF OMAHA: ROOFING &amp; SIDING, 7 YEARS RUNNING &nbsp;|&nbsp; FREE ROOF INSPECTION &nbsp;|&nbsp; WE HANDLE YOUR INSURANCE CLAIM</span>
        <span className="sm:hidden">★ FREE ROOF INSPECTION &nbsp;|&nbsp; BEST OF OMAHA 7 YEARS</span>
      </div>

      {/* Main nav */}
      <nav
        style={{
          background: "#0A1220",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "80px",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "stretch", flexShrink: 0, textDecoration: "none", padding: "8px 0", height: "100%" }}>
          <img
            src={LOGO}
            alt="Royalty Roofing and Siding"
            style={{ height: "100%", width: "auto", objectFit: "contain", maxWidth: "280px" }}
          />
        </a>

        {/* Center nav links - desktop only */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
          {NAV_LINKS.map(({ label, id }) => (
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
                padding: "10px 18px",
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

        {/* Right: Phone + CTA (desktop) + Hamburger (mobile) */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          {/* Phone — visible on sm+ */}
          <a
            href="tel:4022168850"
            className="hidden sm:flex"
            style={{
              alignItems: "center",
              gap: "7px",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "16px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (402) 216-8850
          </a>

          {/* CTA button — hidden on mobile (sticky bar handles it) */}
          <button
            onClick={() => scrollTo("bottom-form")}
            className="hidden lg:block"
            style={{
              background: "#3D6CC0",
              color: "white",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "11px 22px",
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

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: "white", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "white", borderRadius: "2px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "white", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            background: "#0A1220",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            padding: "8px 0 16px",
          }}
          className="lg:hidden"
        >
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "17px",
                padding: "14px 24px",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </button>
          ))}
          <div style={{ padding: "16px 24px 0", display: "flex", gap: "12px" }}>
            <a
              href="tel:4022168850"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "13px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
            <button
              onClick={() => scrollTo("bottom-form")}
              style={{
                flex: 1,
                background: "#3D6CC0",
                color: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "15px",
                padding: "13px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.02em",
              }}
            >
              Free Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
