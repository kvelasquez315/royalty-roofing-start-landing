/**
 * BottomFormSection — Second conversion point
 * id="bottom-form"
 * Navy bg, clean phone (no gold bubble), blue checkmarks, blue submit button
 */
import EstimateForm from "./EstimateForm";

export default function BottomFormSection() {
  return (
    <section
      id="bottom-form"
      style={{ background: "#0F1B2D", padding: "80px 0 112px" }}
    >
      <div
        className="w-full px-6"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="pt-2">
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
              GET YOUR FREE ESTIMATE
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
              Serving Omaha
              <br />Since 2010.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "32px",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
              }}
            >
              Free consultation. No obligation. Response within one business day. We'll come to your home, inspect your roof or siding, and give you an honest assessment — no pressure, no upsell.
            </p>

            {/* Clean phone treatment */}
            <a
              href="tel:4022168850"
              className="flex items-center gap-2 mb-8"
              style={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "28px",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              (402) 216-8850
            </a>

            {/* Trust checklist with blue checkmarks */}
            <ul>
              {[
                "Family Owned Since 2010",
                "Best of Omaha — 7 Consecutive Years",
                "4.9 Stars on Google (500+ Reviews)",
                "Licensed & Insured in Nebraska",
                "Workmanship Warranty on Every Job",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                  style={{ marginBottom: "12px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="#3D6CC0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
          </div>

          {/* Right: Form */}
          <div>
            <EstimateForm variant="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
