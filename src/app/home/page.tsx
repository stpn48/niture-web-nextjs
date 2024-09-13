import { AboutSection } from "@/app/home/components/AboutSection";
import { ClientFeedbackSection } from "@/app/home/components/ClientFeedbackSection";
import { CollectionsSection } from "@/app/home/components/CollectionsSection";
import { FeaturedItems } from "@/components/FeaturedItems";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/app/home/components/HeroSection";
import { NewsletterSignupSection } from "@/app/home/components/NewsletterSignupSection";
import { FadeAnimationWrapper } from "@/components/FadeAnimationWrapper";

export default function HomePage() {
  return (
    <FadeAnimationWrapper>
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedItems />
        <CollectionsSection />
        <AboutSection />
        <ClientFeedbackSection />
        <NewsletterSignupSection />
        <Footer />
      </div>
    </FadeAnimationWrapper>
  );
}
