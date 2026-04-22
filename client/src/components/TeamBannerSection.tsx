/**
 * TeamBannerSection — "Local People. Real Accountability."
 * id="team"
 * Dark navy bg, aerial photo overlay, team headshots
 * Blue CTA button (no gold), DM Sans 700 headline
 */
export default function TeamBannerSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden"
      style={{ background: "#0F1B2D" }}
    >
      {/* Background photo with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/manus-storage/aerial-house_c55adca7.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
        }}
      />

      <div
        className="relative w-full px-6 py-20 lg:py-28"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="mb-4"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              THE ROYALTY TEAM
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "20px",
                fontFamily: "var(--font-body)",
              }}
            >
              Local People.
              <br />Real Accountability.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "24px",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
              }}
            >
              We're not a franchise or a storm-chasing crew that rolls in after a hailstorm and disappears. Royalty Roofing and Siding is family-owned and operated right here in Omaha. When you call, you talk to us — not a call center.
            </p>
            <ul style={{ marginBottom: "32px" }}>
              {[
                "Family owned and operated since 2010",
                "Omaha-based team — we live here too",
                "Direct communication with your project manager",
                "We answer our phones and return calls same day",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                  style={{ marginBottom: "10px" }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#3D6CC0",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "14px",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="tel:4022168850"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#3D6CC0",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#2d5aad")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#3D6CC0")}
            >
              Call (402) 216-8850
            </a>
          </div>

          {/* Right: Team photos */}
          <div className="flex gap-4 justify-center lg:justify-end">
            <div className="flex flex-col gap-4">
              <div
                style={{
                  width: "180px",
                  height: "220px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid rgba(61,108,192,0.4)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="/manus-storage/team-1_82b94146.webp"
                  alt="AJ Velasquez — Owner, Royalty Roofing and Siding"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  padding: "12px 16px",
                  textAlign: "center",
                  background: "rgba(61,108,192,0.15)",
                  border: "1px solid rgba(61,108,192,0.3)",
                }}
              >
                <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px", fontFamily: "var(--font-body)" }}>
                  AJ Velasquez
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginTop: "2px", fontFamily: "var(--font-body)" }}>
                  Owner
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4" style={{ marginTop: "32px" }}>
              <div
                style={{
                  width: "180px",
                  height: "220px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid rgba(61,108,192,0.4)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src="/manus-storage/team-2_267ba821.webp"
                  alt="David Velasquez — Co-Owner, Royalty Roofing and Siding"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  padding: "12px 16px",
                  textAlign: "center",
                  background: "rgba(61,108,192,0.15)",
                  border: "1px solid rgba(61,108,192,0.3)",
                }}
              >
                <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px", fontFamily: "var(--font-body)" }}>
                  David Velasquez
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginTop: "2px", fontFamily: "var(--font-body)" }}>
                  Co-Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
