import React, { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { translations, Language } from "@/lib/translations";

// Import background images and trailer
import bowieBackground1 from "@assets/Edward & Bowie_1756977321207.png";
import bowieBackground2 from "@assets/Edward & Bowie 2_1756977323784.png";
import bowieBackground3 from "@assets/Edward & Bowie 3_1756977326050.png";
import bowieBackground4 from "@assets/Edward & Bowie 4_1756977328193.png";
import directorImage from "@assets/Screenshot 2025-09-04 at 10.12.23_1756977206692.png";
// Removed old trailer import

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  
  const backgroundImages = [
    { src: bowieBackground1, alt: "Edward & Bowie with full credits" },
    { src: bowieBackground2, alt: "Edward & Bowie clean version" },
    { src: bowieBackground3, alt: "Edward & Bowie simple version" },
    { src: bowieBackground4, alt: "Edward & Bowie minimal version" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentBackground ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={bg.src}
              alt={bg.alt} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full pt-20 sm:pt-16 lg:pt-0 pb-20 sm:pb-16 lg:pb-8 gap-8">
        
        {/* Left side - Documentary Information */}
        <div className="flex-1 text-center lg:text-left max-w-2xl bg-black/70 backdrop-blur-sm rounded-lg p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
            {t.movieTitle}
          </h1>

          <div className="text-bowie-gold text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
            {t.movieDetails}
          </div>

          {/* Mobile Synopsis - Short version */}
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-200 leading-relaxed drop-shadow-lg block md:hidden">
            {t.mobileSynopsis}
          </p>
          
          {/* Desktop Synopsis - Full version */}
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-200 leading-relaxed drop-shadow-lg hidden md:block">
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
              onClick={() => setIsLearnMoreOpen(true)}
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
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-black/95 border-bowie-accent">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-bowie-accent mb-4">
              {t.movieTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="text-gray-200 leading-relaxed whitespace-pre-line">
            {t.fullSynopsis}
          </div>
        </DialogContent>
      </Dialog>

      {/* Learn More Modal with Pages */}
      <Dialog open={isLearnMoreOpen} onOpenChange={setIsLearnMoreOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-black/95 border-bowie-accent">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-bowie-accent mb-4">
              Edward & Bowie - Documentary Information
            </DialogTitle>
          </DialogHeader>
          <div className="relative h-[70vh] overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {/* Page 1: Main Description */}
              <div className="w-full flex-shrink-0 px-6 py-4 overflow-y-auto">
                <h3 className="text-xl font-bold text-bowie-accent mb-4">About the Film</h3>
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <p>Socialites, models and pop stars made up the stream of humanity that flowed through Edward Bell's Earl's Court basement studio in 1981, the year Marcus Thompson shot the original cinema short entitled 'Edward'. Part fantasy and part reality, the thirty-minute film examined Bell's methods, influences, lifestyle and work and was shot on 35mm in London and the South of France. Now a new film has just been completed.</p>
                  
                  <p>Thompson found the 35mm negative to the original film in the BFI Archives. The idea was to revisit the artist's world over four decades later, as he looks back at the chronic, the creative, the static and chaotic – his heroin addiction, his close friendship with David Bowie, and a lingering love. Is this film set in the early 1980s, but haunted by the future? Or is it set in the present, and haunted by the past?</p>
                  
                  <p className="italic">In Edward's own words: "In the early eighties I was a fully fledged junkie and contributed nothing creative to your filming; I wish to right that wrong. Let's put it on a different level, with more depth and stretch the time-scale, then and now."</p>
                </div>
              </div>

              {/* Page 2: Marcus Thompson */}
              <div className="w-full flex-shrink-0 px-6 py-4 overflow-y-auto">
                <h3 className="text-xl font-bold text-bowie-accent mb-4">Marcus Thompson - Director</h3>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3 flex-shrink-0">
                    <img 
                      src={directorImage}
                      alt="Marcus Thompson directing on set with film equipment"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-400 mt-2 text-center">Marcus Thompson on set</p>
                  </div>
                  <div className="lg:w-2/3 text-gray-200 leading-relaxed space-y-4">
                    <p>Marcus Thompson's film career is built on a solid foundation of drawing, painting and experimenting with magnetic tape, collage and any other medium he could find to express himself. Having made several experimental films during his time at art college in Bristol, he joined Granada Television as an assistant film editor in order to learn the craft of professional film post-production.</p>
                    
                    <p>After years as a picture and sound editor, Marcus has become a highly accomplished screenwriter, director and producer. His years of experience as a film editor proved to be an invaluable foundation on which to base his directorial career. He made a name for himself editing award winning SOUTH BANK SHOWS and several BBC classic documentaries including Michael Wood's IN SEARCH OF series.</p>
                    
                    <p>He began directing corporate films for French fashion house Marie Claire, Harrods and Honda, before a short period making music videos for bands such as Ocean Colour Scene, Jesus Jones, Runrig etc. He has produced and directed four feature films, MALEVOLENCE, MIDDLETON'S CHANGELING, the musical film noire THE BIGGEST THING THAT EVER HIT BROADWAY (In Competition Sitges 2018), and award winning, A PLACE TO STAY (GAIA Award at California's WCFF).</p>
                    
                    <p>Thompson's psychological thriller TOWNSVILLE is slated for 2026 in Queensland, Australia and SHOOTING BERNARDA, an adaptation of Lorca's masterpiece, is scheduled for 2027 in Andalucia, Spain.</p>
                  </div>
                </div>
              </div>

              {/* Page 3: Edward Bell */}
              <div className="w-full flex-shrink-0 px-6 py-4 overflow-y-auto">
                <h3 className="text-xl font-bold text-bowie-accent mb-4">Edward Bell - Featured Artist</h3>
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <p>With the success of his design for David Bowie's 'Scary Monsters' album sleeve, Bell became an extremely sought-after portrait artist, leading to commissions from stars such as Elton John and Hazel O'Connor. The film is a rare insight to a contemporary artist's life, made all the more poignant by the fact that whilst Edward survived the heady period, many of those that drifted through his studio did not.</p>
                  
                  <p>The artist is now obsessed with landscapes and skies, and the psychology of colour and emotion in the forces of nature; an unlimited source of real inspiration to him. Victor Hugo wrote that 'there is one spectacle grander than the sky, that is the interior of the soul', and that is what the film is intended to portray.</p>
                  
                  <p>Illuminating nature's mystery, capturing skies in this interface between art and science, reinterpreting, reinvigorating and producing a new original feature length film shining light on forty-five years of the artist Edward Bell's fascinating life.</p>
                  
                  <p>Bell's paintings are stylish and fresh, and there is an immediacy that flows through the many paintings featured in the film, complimented by eminent record producer Stephen Lipson's haunting soundtrack.</p>
                </div>
              </div>

              {/* Page 4: Production Details */}
              <div className="w-full flex-shrink-0 px-6 py-4 overflow-y-auto">
                <h3 className="text-xl font-bold text-bowie-accent mb-4">Production Information</h3>
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-bowie-accent mb-2">A Marcus Thompson Film</h4>
                      <p className="mb-4">Featuring the work of Edward Bell</p>
                      
                      <h4 className="font-semibold text-bowie-accent mb-2">Original Music By</h4>
                      <p className="mb-4">Stephen Lipson</p>
                      
                      <h4 className="font-semibold text-bowie-accent mb-2">Produced By</h4>
                      <p>Judy Parkinson</p>
                      <p>Madou Hillenius</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-bowie-accent mb-2">Technical Specifications</h4>
                      <p>Ratio: 16 x 9</p>
                      <p>Audio: 5.1</p>
                      <p>Running time: 87 minutes</p>
                      
                      <h4 className="font-semibold text-bowie-accent mb-2 mt-4">Filming Locations</h4>
                      <p>London</p>
                      <p>The South of France</p>
                      <p>Venice</p>
                      <p>Llangollen, Wales</p>
                      
                      <h4 className="font-semibold text-bowie-accent mb-2 mt-4">Production Company</h4>
                      <p>Hollywood Daze Motion Pictures</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mt-6">The original film was premiered at BAFTA and went on to represent Great Britain at Filmex, the Los Angeles International Film Festival.</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <Button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="bg-bowie-accent/20 hover:bg-bowie-accent/40 text-bowie-accent border border-bowie-accent disabled:opacity-50 disabled:cursor-not-allowed"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentPage === page ? 'bg-bowie-accent' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                disabled={currentPage === 3}
                className="bg-bowie-accent/20 hover:bg-bowie-accent/40 text-bowie-accent border border-bowie-accent disabled:opacity-50 disabled:cursor-not-allowed"
                size="sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Background Navigation Dots */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBackground(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentBackground === index 
                  ? 'bg-bowie-accent scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Switch to background ${index + 1}`}
            />
          ))}
          <div className="ml-3 text-xs text-white/70">
            {currentBackground + 1}/4
          </div>
        </div>
      </div>
    </section>
  );
}