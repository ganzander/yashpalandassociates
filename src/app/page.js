import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LocationSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
