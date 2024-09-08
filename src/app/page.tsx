import { AboutSection } from "@/components/AboutSection";
import { ClientFeedbackSection } from "@/components/ClientFeedbackSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { FeaturedItems } from "@/components/FeaturedItems";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NewsletterSignupSection } from "@/components/NewsletterSignupSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedItems />
      <CollectionsSection />
      <AboutSection />
      <ClientFeedbackSection />
      <NewsletterSignupSection />
      <Footer />
    </div>
  );
}
