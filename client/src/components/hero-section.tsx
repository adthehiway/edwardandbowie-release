import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@/lib/translations";

// Import background image
import poster12 from "@assets/terrifiermain_1751015810320.jpg";

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={poster12}
          alt="XFM Documentary background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full pt-20 sm:pt-16 lg:pt-0">
        {/* Documentary Title and Details */}
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
            {t.movieTitle}
          </h1>

          <div className="text-blood-red text-base sm:text-lg md:text-xl font-creepster mb-4 sm:mb-6 tracking-wider">
            {t.movieDetails}
          </div>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {t.synopsis}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Button asChild className="bg-blood-red hover:bg-horror-red text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="#trailer" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                {t.trailer}
              </a>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="https://hiway-frontend-three.vercel.app/watch/e2e87e0f-9ff5-4acb-8ae4-bee681bf63b2" target="_blank" rel="noopener noreferrer">
                {t.buyNow}
              </a>
            </Button>
          </div>
        </div>

        {/* Trailer Section Placeholder */}
        <div id="trailer" className="w-full max-w-4xl mx-auto mt-12">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 text-center">
            <h3 className="text-white text-xl font-semibold mb-4">Documentary Trailer</h3>
            <div className="bg-gray-800 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
              <p className="text-gray-400 text-lg">Trailer will be uploaded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}