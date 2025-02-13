import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LocationSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
