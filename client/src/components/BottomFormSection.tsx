/**
 * BottomFormSection — Second conversion point at bottom of page
 * id="estimate-form" — all CTAs scroll here
 * Navy background, phone + trust left, white form card right
 */
import { Phone } from "lucide-react";
import EstimateForm from "./EstimateForm";

export default function BottomFormSection() {
  return (
    <section
      id="estimate-form"
      style={{ background: "oklch(0.18 0.04 255)" }}
    >
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Context */}
          <div className="pt-2">
            <div className="section-label-light mb-4">Get Your Free Estimate</div>
            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Serving Omaha
              <br />Since 2010.
            </h2>
            <p
              className="text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Free consultation. No obligation. Response within one business day. We'll come to your home, inspect your roof or siding, and give you an honest assessment — no pressure, no upsell.
            </p>

            {/* Phone */}
            <a
              href="tel:4022168850"
              className="flex items-center gap-4 mb-8 group"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                style={{ background: "oklch(0.75 0.14 80)" }}
              >
                <Phone size={22} style={{ color: "oklch(0.18 0.04 255)" }} />
              </div>
              <div>
                <div
                  className="text-xs font-semibold tracking-wide uppercase mb-0.5"
                  style={{ color: "oklch(0.7 0.1 255)", fontFamily: "var(--font-body)" }}
                >
                  Call or Text Anytime
                </div>
                <div
                  className="text-3xl font-black text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  (402) 216-8850
                </div>
              </div>
            </a>

            {/* Trust bullets */}
            <ul className="space-y-3">
              {[
                "Family Owned Since 2010",
                "Best of Omaha — 7 Consecutive Years",
                "4.9 Stars on Google (500+ Reviews)",
                "Licensed & Insured in Nebraska",
                "Workmanship Warranty on Every Job",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      background: "oklch(0.45 0.15 255 / 0.3)",
                      color: "oklch(0.75 0.14 80)",
                      border: "1px solid oklch(0.45 0.15 255 / 0.5)",
                    }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
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
