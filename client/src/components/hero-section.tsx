import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@/lib/translations";

// Import background image and trailer
import bowieBackground from "@assets/DavidBowieBackground_1756198148691.png";
import xfmTrailer from "@assets/XFMTrailer_1752652274957.mp4";

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
          src={bowieBackground}
          alt="David Bowie Art Decade poster with exhibition imagery" 
          className="w-full h-full object-cover object-center"
        />

      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full pt-20 sm:pt-16 lg:pt-0 gap-8">
        
        {/* Left side - Documentary Information */}
        <div className="flex-1 text-center lg:text-left max-w-2xl bg-black/70 backdrop-blur-sm rounded-lg p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
            {t.movieTitle}
          </h1>

          <div className="text-bowie-gold text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
            {t.movieDetails}
          </div>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200 leading-relaxed drop-shadow-lg">
            {t.synopsis}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => window.open('https://portal.onthehiway.com/watch?s=japt42tbw6', 'trailer', 'width=800,height=600')}
              className="bg-bowie-gold hover:bg-bowie-blue text-black px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4" />
              {t.trailer}
            </Button>
            <Button asChild className="bg-bowie-blue hover:bg-bowie-red text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="https://portal.onthehiway.com/watch?s=2jrsxgmiq2" target="_blank" rel="noopener noreferrer">
                {t.buyNow}
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Trailer Section */}
        <div id="trailer" className="flex-1 max-w-2xl w-full">
          <div className="relative w-full max-w-[640px] mx-auto">
            <iframe 
              width="640" 
              height="360" 
              src="https://portal.onthehiway.com/embed?s=76so2sl4eq"
              className="w-full rounded-lg shadow-lg"
              style={{ height: '360px', aspectRatio: '16/9' }}
              allowFullScreen
              title="XFM Documentary Trailer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}