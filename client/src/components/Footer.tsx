/**
 * Footer — 3-column: logo+tagline, services, contact
 * Dark navy, minimal, trust-reinforcing
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
    <footer style={{ background: "oklch(0.13 0.03 255)", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <img
              src="/manus-storage/logo_5194693c.png"
              alt="Royalty Roofing and Siding"
              className="h-12 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.6 0.03 255)", fontFamily: "var(--font-body)" }}
            >
              Omaha's most trusted roofing and siding contractor since 2010. Family owned. Best of Omaha winner 7 consecutive years.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.6 0.03 255)", fontFamily: "var(--font-body)" }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.75 0.03 255)", fontFamily: "var(--font-body)" }}
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
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.6 0.03 255)", fontFamily: "var(--font-body)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href="tel:4022168850"
                  className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  (402) 216-8850
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@royaltyroofing.org"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "oklch(0.65 0.05 255)", fontFamily: "var(--font-body)" }}
                >
                  info@royaltyroofing.org
                </a>
              </div>
              <div>
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.65 0.05 255)", fontFamily: "var(--font-body)" }}
                >
                  Omaha, NE &amp; Surrounding Areas
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://royaltyroofing.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-white transition-colors underline"
                  style={{ color: "oklch(0.55 0.05 255)", fontFamily: "var(--font-body)" }}
                >
                  royaltyroofing.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.06)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()} Royalty Roofing and Siding. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://royaltyroofing.org/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-white transition-colors"
              style={{ color: "oklch(0.45 0.02 255)", fontFamily: "var(--font-body)" }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
