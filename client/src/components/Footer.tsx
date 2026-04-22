/**
 * Footer — 3-column: logo+tagline, services, contact
 * No gold/yellow anywhere, blue hover states on links
 */
export default function Footer() {
  const services = [
    "Roof Repair",
    "Roof Replacement",
    "Siding",
    "Gutters",
    "Windows & Doors",
    "Storm Damage",
  ];

  return (
    <footer style={{ background: "#080f1a", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div
        className="w-full px-6 py-12"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <img
              src="/manus-storage/logo-white_d1fb2924.png"
              alt="Royalty Roofing and Siding"
              style={{ height: "40px", width: "auto", marginBottom: "16px" }}
            />
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-body)",
              }}
            >
              Omaha's most trusted roofing and siding contractor since 2010. Family owned. Best of Omaha winner 7 consecutive years.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s} style={{ marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-body)",
                marginBottom: "16px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:4022168850"
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                (402) 216-8850
              </a>
              <a
                href="mailto:info@royaltyroofing.org"
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                info@royaltyroofing.org
              </a>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>
                Omaha, NE &amp; Surrounding Areas
              </span>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} Royalty Roofing and Siding. All rights reserved.
          </p>
          <a
            href="https://royaltyroofing.org/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3D6CC0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          footer .grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          footer .w-full {
            padding: 40px 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
