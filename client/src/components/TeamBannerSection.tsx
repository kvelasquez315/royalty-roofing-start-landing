/**
 * TeamBannerSection — "Local People. Real Accountability."
 * Dark navy background with rooftop aerial photo overlay, team headshots
 */
export default function TeamBannerSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "oklch(0.18 0.04 255)" }}
    >
      {/* Background photo with overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/manus-storage/aerial-house_c55adca7.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="section-label-light mb-4">The Royalty Team</div>
            <h2
              className="text-3xl md:text-4xl font-black text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Local People.
              <br />Real Accountability.
            </h2>
            <p
              className="text-white/70 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We're not a franchise or a storm-chasing crew that rolls in after a hailstorm and disappears. Royalty Roofing and Siding is family-owned and operated right here in Omaha. When you call, you talk to us — not a call center.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Family owned and operated since 2010",
                "Omaha-based team — we live here too",
                "Direct communication with your project manager",
                "We answer our phones and return calls same day",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "oklch(0.75 0.14 80)" }}
                  />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="tel:4022168850"
              className="btn-gold"
            >
              Call (402) 216-8850
            </a>
          </div>

          {/* Right: Team photos */}
          <div className="flex gap-4 justify-center lg:justify-end">
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: "180px",
                  height: "220px",
                  border: "3px solid oklch(0.75 0.14 80 / 0.5)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
                }}
              >
                <img
                  src="/manus-storage/team-1_82b94146.webp"
                  alt="Royalty Roofing team member"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="rounded-xl px-4 py-3 text-center"
                style={{ background: "oklch(0.75 0.14 80 / 0.15)", border: "1px solid oklch(0.75 0.14 80 / 0.3)" }}
              >
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  AJ Velasquez
                </div>
                <div className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  Owner
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  width: "180px",
                  height: "220px",
                  border: "3px solid oklch(0.45 0.15 255 / 0.5)",
                  boxShadow: "0 8px 32px oklch(0 0 0 / 0.4)",
                }}
              >
                <img
                  src="/manus-storage/team-2_267ba821.webp"
                  alt="Royalty Roofing team member"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="rounded-xl px-4 py-3 text-center"
                style={{ background: "oklch(0.45 0.15 255 / 0.2)", border: "1px solid oklch(0.45 0.15 255 / 0.4)" }}
              >
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  David Velasquez
                </div>
                <div className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
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
