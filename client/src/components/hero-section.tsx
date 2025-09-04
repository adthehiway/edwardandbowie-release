import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { translations, Language } from "@/lib/translations";

// Import background image and trailer
import bowieBackground from "@assets/Edward & Bowie 3_1756976822253.png";
// Removed old trailer import

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);

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

          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-200 leading-relaxed drop-shadow-lg">
            {t.synopsis}
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-bowie-gold hover:text-bowie-blue underline text-sm mb-6 sm:mb-8 cursor-pointer transition-colors duration-200"
          >
            {t.readMore}
          </button>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={() => window.open('https://portal.onthehiway.com/watch?s=io59hppx7x', 'trailer', 'width=800,height=600')}
              className="bg-bowie-gold hover:bg-bowie-blue text-black px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto"
            >
              <Play className="mr-2 h-4 w-4" />
              {t.trailer}
            </Button>
            <Button 
              onClick={() => window.open('https://www.davidbowienews.com', '_blank')}
              className="bg-transparent border-2 border-bowie-accent text-bowie-accent hover:bg-bowie-accent hover:text-black px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto transition-all duration-300"
            >
              {t.buyNow}
            </Button>
          </div>
        </div>

        {/* Right side - Trailer Section */}
        <div id="trailer" className="flex-1 max-w-2xl w-full">
          <div className="relative w-full max-w-[640px] mx-auto">
            <iframe 
              width="640" 
              height="360" 
              src="https://portal.onthehiway.com/embed?s=142kkrvt67"
              className="w-full rounded-lg shadow-lg"
              style={{ height: '360px', aspectRatio: '16/9' }}
              allowFullScreen
              title="Edward Bell Documentary"
            />
          </div>
        </div>
      </div>
      
      {/* Read More Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black/95 border-bowie-gold">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-bowie-gold mb-4">
              {t.movieTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="text-gray-200 leading-relaxed whitespace-pre-line">
            {t.fullSynopsis}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}