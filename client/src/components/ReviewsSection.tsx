/**
 * ReviewsSection — 5 real Google reviews in a 3-col grid
 * White background, star ratings, reviewer name + source
 */
import { ExternalLink } from "lucide-react";

const REVIEWS = [
  {
    name: "Brett A.",
    text: "I had a relatively small job and because of this, most other companies wanted nothing to do with it. Royalty was responsive, professional, and did quality work. I would absolutely go with them again.",
    stars: 5,
  },
  {
    name: "Brian B.",
    text: "AJ worked tirelessly with three different claims adjusters and finally got them to do the right thing for us. He is a top-notch professional and his team did a great job on our house.",
    stars: 5,
  },
  {
    name: "Natalie V.",
    text: "They responded immediately and made the whole process seamless and easy. Repairs were made on time and the roof and gutters look amazing. Everyone was easy to work with through a potentially stressful time.",
    stars: 5,
  },
  {
    name: "Lisa F.",
    text: "It is just so rare to find such an honest company who really cares about even their potential customers. Jeremy had zero pressure and gave me more information than any other company.",
    stars: 5,
  },
  {
    name: "Diane D.",
    text: "David did all the negotiating with our insurance and always went to bat for us. The price was fair for a superior product, quality workmanship, and outstanding customer service.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="oklch(0.75 0.14 80)" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section style={{ background: "white" }}>
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-3">What Omaha Homeowners Say</div>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "oklch(0.18 0.04 255)" }}
          >
            4.9 Stars. 500+ Reviews. Here's Why.
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-xl p-6 flex flex-col gap-3 transition-shadow hover:shadow-lg"
              style={{
                border: "1px solid oklch(0.88 0.01 255)",
                background: "oklch(0.99 0.002 255)",
              }}
            >
              <StarRating count={review.stars} />
              <p
                className="text-gray-700 text-sm leading-relaxed flex-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {review.text}
              </p>
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.18 0.04 255)", fontFamily: "var(--font-body)" }}
                >
                  {review.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  Google Review
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Royalty+Roofing+and+Siding+Omaha+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-lg border-2 transition-all hover:bg-blue-50"
            style={{
              color: "oklch(0.45 0.15 255)",
              borderColor: "oklch(0.45 0.15 255)",
              fontFamily: "var(--font-body)",
            }}
          >
            <ExternalLink size={15} />
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
