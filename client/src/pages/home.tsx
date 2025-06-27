import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MovieDetails from "@/components/movie-details";
import PosterGallery from "@/components/poster-gallery";
import CastSection from "@/components/cast-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-deep-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MovieDetails />
      <PosterGallery />
      <CastSection />
      <CTASection />
      <Footer />
    </div>
  );
}
