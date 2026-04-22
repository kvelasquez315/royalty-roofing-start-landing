/**
 * Home — Royalty Roofing Google Ads Landing Page
 * Design: Premium Conversion Machine
 * Palette: Navy (#0F1B2D) + Royal Blue (#3D6CC0) + Gold + Off-white
 * Fonts: Barlow (display) + DM Sans (body)
 *
 * Section order (conversion-optimized):
 * 1. Navbar (fixed, sticky phone + CTA)
 * 2. HeroSection (full-viewport, above-the-fold form)
 * 3. TrustBar (stats + 7 award badges)
 * 4. HonestAssessmentSection (differentiator)
 * 5. ReviewsSection (social proof grid)
 * 6. TeamBannerSection (local accountability)
 * 7. BottomFormSection (second conversion point, id="estimate-form")
 * 8. Footer
 */
import BottomFormSection from "@/components/BottomFormSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HonestAssessmentSection from "@/components/HonestAssessmentSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import TeamBannerSection from "@/components/TeamBannerSection";
import TrustBar from "@/components/TrustBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HonestAssessmentSection />
      <ReviewsSection />
      <TeamBannerSection />
      <BottomFormSection />
      <Footer />
    </div>
  );
}
