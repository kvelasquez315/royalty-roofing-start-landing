/**
 * TrustBar — Stats strip + Best of Omaha badges
 * bg-[#0F1B2D], flush below hero (no gap), no gold
 * Stars use #F59E0B (only acceptable warm color)
 */
import { useEffect, useRef, useState } from "react";

const STATS = [
  { display: "4.9", hasStars: true, label: "500+ Google Reviews" },
  { display: "7x", hasStars: false, label: "Best of Omaha Winner" },
  { display: "15+", hasStars: false, label: "Years in Omaha" },
  { display: "500+", hasStars: false, label: "Projects Completed" },
];

const AWARDS = [
  { src: "/manus-storage/award-2020_4ad2a5bb.png", alt: "Best of Omaha 2020 — Residential Roofing" },
  { src: "/manus-storage/award-2021_ecbc78f2.jpg", alt: "Best of Omaha 2021 — Residential Roofing" },
  { src: "/manus-storage/award-2022_5ea9299b.png", alt: "Best of Omaha 2022 — Residential Siding" },
  { src: "/manus-storage/award-2023_6a88d922.png", alt: "Best of Omaha 2023 — Residential Roofing" },
  { src: "/manus-storage/award-2024_e8dc19af.png", alt: "Best of Omaha 2024 — Residential Roofing" },
  { src: "/manus-storage/award-2025_4128df32.png", alt: "Best of Omaha 2025 — Residential Roofing" },
  { src: "/manus-storage/award-2026_590c0eff.png", alt: "Best of Omaha 2026 — Residential Siding" },
];

function StarIcons() {
  return (
    <span className="inline-flex gap-0.5 ml-1.5 align-middle">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </span>
  );
}

function AnimatedNumber({ target }: { target: string }) {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShown(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref}>{shown ? target : "—"}</span>;
}

export default function TrustBar() {
  return (
    <section style={{ background: "#0F1B2D", paddingBottom: "48px" }}>
      {/* Stats strip */}
      <div
        className="w-full px-6 py-8"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:flex md:items-center md:justify-center">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden md:block w-px h-8 mx-10 shrink-0"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              )}
              <div className="flex flex-col items-center text-center">
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "var(--font-body)",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedNumber target={stat.display} />
                  {stat.hasStars && <StarIcons />}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginTop: "6px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0 24px" }} />

      {/* Award badges */}
      <div
        className="w-full px-6 pt-10"
        style={{ maxWidth: "1280px", margin: "0 auto" }}
      >
        <p
          className="text-center mb-6"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-body)",
          }}
        >
          OMAHA MAGAZINE'S BEST OF OMAHA — 7 CONSECUTIVE YEARS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {AWARDS.map((award) => (
            <img
              key={award.alt}
              src={award.src}
              alt={award.alt}
              style={{ height: "64px", width: "auto", objectFit: "contain", opacity: 0.9, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
