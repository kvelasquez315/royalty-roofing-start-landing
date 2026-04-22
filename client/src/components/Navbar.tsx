/**
 * Navbar — Premium Conversion Machine design
 * Fixed top bar: logo left, phone + CTA right
 * Navy/90 background with blur for depth
 */
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-16"
      style={{
        background: "oklch(0.18 0.04 255 / 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-3 shrink-0">
        <img
          src="/manus-storage/logo_5194693c.png"
          alt="Royalty Roofing and Siding"
          className="h-10 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </a>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <a
          href="tel:4022168850"
          className="flex items-center gap-2 text-white font-semibold text-sm md:text-base hover:text-yellow-300 transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Phone size={16} className="shrink-0" />
          <span className="hidden sm:inline">(402) 216-8850</span>
          <span className="sm:hidden">Call Now</span>
        </a>
        <a
          href="#estimate-form"
          className="btn-primary text-sm px-4 py-2 md:px-5 md:py-2.5"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("estimate-form")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Free Estimate
        </a>
      </div>
    </nav>
  );
}
