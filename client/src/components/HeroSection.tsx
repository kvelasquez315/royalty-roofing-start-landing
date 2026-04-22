/**
 * HeroSection — Full-viewport hero
 * Dark navy overlay on house photo, headline left, form card right
 * Above-the-fold form is the #1 conversion best practice
 */
import { Phone, ShieldCheck, Star, Trophy } from "lucide-react";
import EstimateForm from "./EstimateForm";

const TRUST_ITEMS = [
  { icon: Star, text: "4.9 Stars — 500+ Google Reviews" },
  { icon: Trophy, text: "Best of Omaha — 7 Consecutive Years" },
  { icon: ShieldCheck, text: "Licensed, Insured & Family Owned Since 2010" },
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
          background: "linear-gradient(105deg, oklch(0.12 0.04 255 / 0.92) 0%, oklch(0.15 0.05 255 / 0.82) 55%, oklch(0.12 0.04 255 / 0.65) 100%)",
        }}
      />

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: Headline + trust */}
          <div>
            <div className="section-label-light mb-4 animate-fade-up">
              Omaha's #1 Rated Roofing Company
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-5 animate-fade-up-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Roof Deserves
              <br />
              <span style={{ color: "oklch(0.75 0.14 80)" }}>Royal Treatment.</span>
            </h1>

            <p
              className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed animate-fade-up-delay-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Free estimates. No pressure. Just honest assessments from Omaha's most-awarded roofing and siding contractor — serving homeowners since 2010.
            </p>

            {/* Trust items */}
            <div className="space-y-3 mb-8 animate-fade-up-delay-3">
              {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.45 0.15 255 / 0.5)", border: "1px solid oklch(1 0 0 / 0.2)" }}
                  >
                    <Icon size={15} className="text-yellow-300" />
                  </div>
                  <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href="tel:4022168850"
              className="inline-flex items-center gap-3 text-white group"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ background: "oklch(0.75 0.14 80)" }}
              >
                <Phone size={20} style={{ color: "oklch(0.18 0.04 255)" }} />
              </div>
              <div>
                <div className="text-xs text-white/60 font-medium" style={{ fontFamily: "var(--font-body)" }}>
                  Call or Text Anytime
                </div>
                <div
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  (402) 216-8850
                </div>
              </div>
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
