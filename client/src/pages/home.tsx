import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="bg-deep-black text-white overflow-hidden h-screen">
      <Navigation />
      <HeroSection />
    </div>
  );
}
