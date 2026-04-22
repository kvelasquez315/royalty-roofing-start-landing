/**
 * HonestAssessmentSection — "Why Royalty" differentiator section
 * Off-white background, 2-col layout: text left, aerial house photo right
 */
import { CheckCircle } from "lucide-react";

const POINTS = [
  {
    title: "Honest Assessments — Not Sales Pitches",
    body: "We'll tell you exactly what your roof needs — even if that means telling you it doesn't need replacement yet. Our inspectors work for you, not a commission.",
  },
  {
    title: "Insurance Claim Experts",
    body: "Storm damage? We've helped hundreds of Omaha homeowners navigate the insurance process. We work directly with your adjuster so you get what you're owed.",
  },
  {
    title: "Workmanship Warranty on Every Job",
    body: "Every roof and siding installation comes with our written workmanship warranty on top of manufacturer material warranties. We stand behind our work.",
  },
];

export default function HonestAssessmentSection() {
  return (
    <section style={{ background: "oklch(0.97 0.005 80)" }}>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label mb-4">Why Royalty?</div>
            <h2
              className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.04 255)" }}
            >
              We Treat Your Home
              <br />Like It's Our Own.
            </h2>
            <p
              className="text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Royalty Roofing and Siding has been Omaha's most trusted roofing contractor since 2010. We're not a storm-chasing company — we're your neighbors, and we'll be here long after the job is done.
            </p>

            <div className="space-y-6">
              {POINTS.map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle
                    size={22}
                    className="shrink-0 mt-0.5"
                    style={{ color: "oklch(0.45 0.15 255)" }}
                  />
                  <div>
                    <h3
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.18 0.04 255)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#estimate-form"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("estimate-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get My Free Estimate
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 60px oklch(0 0 0 / 0.15)" }}
            >
              <img
                src="/manus-storage/hero-bg_350164c4.webp"
                alt="Aerial view of completed Royalty Roofing project in Omaha"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 rounded-xl px-5 py-4 shadow-xl"
              style={{ background: "oklch(0.18 0.04 255)" }}
            >
              <div
                className="text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                15+ Years
              </div>
              <div
                className="text-xs font-medium mt-0.5"
                style={{ color: "oklch(0.7 0.1 255)", fontFamily: "var(--font-body)" }}
              >
                Serving Omaha Homeowners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
