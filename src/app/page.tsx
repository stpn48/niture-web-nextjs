import { FeaturedItems } from "@/components/FeaturedItems";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedItems />
    </div>
  );
}
