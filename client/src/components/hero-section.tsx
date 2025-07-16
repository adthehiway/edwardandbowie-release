import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@/lib/translations";

// Import background image and trailer
import xfmBackground from "@assets/ph_166090094662ff5652a5f9e_1752652509216.jpg";
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
          src={xfmBackground}
          alt="Ricky Gervais and Stephen Merchant at XFM" 
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

          <div className="text-green-400 text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
            {t.movieDetails}
          </div>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-200 leading-relaxed drop-shadow-lg">
            {t.synopsis}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="#trailer" rel="noopener noreferrer">
                <Play className="mr-2 h-4 w-4" />
                {t.trailer}
              </a>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="https://hiway-frontend-three.vercel.app/watch/e2e87e0f-9ff5-4acb-8ae4-bee681bf63b2" target="_blank" rel="noopener noreferrer">
                {t.buyNow}
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Trailer Section */}
        <div id="trailer" className="flex-1 max-w-2xl w-full">
          <video 
            controls 
            className="w-full h-auto rounded-lg shadow-lg"
            poster={xfmBackground}
          >
            <source src={xfmTrailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}