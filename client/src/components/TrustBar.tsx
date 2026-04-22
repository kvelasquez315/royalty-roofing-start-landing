/**
 * TrustBar — Horizontal strip with 4 key stats + all 7 Best of Omaha award badges
 * Off-white background, navy text — visual break between hero and content
 */
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 4.9, suffix: " Stars", label: "on Google", decimals: 1 },
  { value: 7, suffix: "x", label: "Best of Omaha Winner", decimals: 0 },
  { value: 15, suffix: "+", label: "Years Serving Omaha", decimals: 0 },
  { value: 500, suffix: "+", label: "5-Star Reviews", decimals: 0 },
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

function AnimatedStat({ value, suffix, label, decimals }: typeof STATS[0]) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(eased * value);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center px-4">
      <div
        className="text-4xl font-black leading-none"
        style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.04 255)" }}
      >
        {current.toFixed(decimals)}{suffix}
      </div>
      <div
        className="text-sm font-medium mt-1"
        style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.04 255)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section style={{ background: "oklch(0.97 0.005 80)" }}>
      {/* Stats row */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-200">
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Award badges strip */}
      <div
        className="py-8 px-4"
        style={{ borderTop: "1px solid oklch(0.88 0.01 255)" }}
      >
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "oklch(0.5 0.04 255)", fontFamily: "var(--font-body)" }}
        >
          Omaha Magazine's Best of Omaha — 7 Consecutive Years
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {AWARDS.map((award) => (
            <img
              key={award.alt}
              src={award.src}
              alt={award.alt}
              className="h-20 md:h-24 w-auto object-contain"
              style={{ filter: "drop-shadow(0 2px 4px oklch(0 0 0 / 0.1))" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
