import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CastSection from "@/components/cast-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { translations, Language } from "@/lib/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as Language);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-deep-black text-white">
      <Navigation 
        language={language} 
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      <HeroSection language={language} />
      <CastSection language={language} />
      <CTASection language={language} />
      <Footer />
    </div>
  );
}