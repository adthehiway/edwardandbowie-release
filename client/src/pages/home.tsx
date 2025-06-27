
import { useState } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import { translations, Language } from "@/lib/translations";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as Language);
  };

  const t = translations[language];

  return (
    <div className="h-screen overflow-hidden bg-deep-black text-white">
      <Navigation 
        language={language} 
        onLanguageChange={handleLanguageChange}
        translations={t}
      />
      <HeroSection language={language} />
    </div>
  );
}
