import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/image-gallery";
import terrifierMainImage from "@assets/terrifiermain_1751015810320.jpg";
import { translations, Language } from "@/lib/translations";

// Import all poster images
import terrifier2Image from "@assets/Terrifier 2_1751015810318.jpg";
import terrifier3Image from "@assets/Terrifier 3_1751015810318.jpg";
import terrifier4Image from "@assets/Terrifier 4_1751015810319.jpg";
import terrifier5Image from "@assets/terrifier 5_1751015810319.jpg";
import terrifier10Image from "@assets/terrifier 10_1751015810319.jpg";
import terrifier1Image from "@assets/terrifier1_1751015810320.jpg";
import terrifier6Image from "@assets/Terrifier6_1751015810320.jpg";

const posterImages = [
  { src: terrifier2Image, alt: "Terrifier 2 poster" },
  { src: terrifier3Image, alt: "Terrifier 3 scene" },
  { src: terrifier4Image, alt: "Terrifier 4 scene" },
  { src: terrifier5Image, alt: "Terrifier 5 scene" },
  { src: terrifier10Image, alt: "Terrifier 10 scene" },
  { src: terrifier1Image, alt: "Terrifier 1 scene" },
  { src: terrifier6Image, alt: "Terrifier 6 scene" },
];

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [actorStartIndex, setActorStartIndex] = useState(0);

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setGalleryOpen(true);
  };

  const t = translations[language];
  const castMembers = t.castMembers.map((member, index) => ({
    ...member,
    image: `https://via.placeholder.com/150x150/8B0000/ffffff?text=${member.name.split(' ').map(n => n[0]).join('')}`
  }));

  const nextActors = () => {
    const maxIndex = castMembers.length - 4;
    setActorStartIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevActors = () => {
    setActorStartIndex(prev => Math.max(prev - 1, 0));
  };

  const visibleActors = castMembers.slice(actorStartIndex, actorStartIndex + 4);

  return (
    <>
      <ImageGallery
        images={posterImages}
        initialIndex={galleryInitialIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-3 text-white transition-all duration-300">
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={terrifierMainImage} 
          alt="Art the Clown terrorizing" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Left side - Movie Title and Details */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-cinzel font-bold mb-4 text-white drop-shadow-2xl">
            {t.movieTitle}
          </h1>

          <div className="text-blood-red text-base sm:text-lg md:text-xl font-creepster mb-6 tracking-wider">
            {t.movieDetails}
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {t.synopsis}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <Button asChild className="bg-blood-red hover:bg-horror-red text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-auto">
              <a href="https://hiway-frontend-three.vercel.app/watch/c692d6e9-773a-4d84-a679-3c657b9b5f11" target="_blank" rel="noopener noreferrer">
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

        {/* Right side - Posters and Actors sections */}
        <div className="flex flex-col space-y-8 items-center lg:items-end max-w-md w-full lg:w-auto mt-8 lg:mt-0">
          {/* Posters section */}
          <div className="w-full">
            <h3 className="text-white text-lg font-semibold mb-4 text-center lg:text-left">{t.posters}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {posterImages.slice(0, 5).map((poster, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-12 sm:h-16 object-cover rounded group-hover:scale-105 transition-transform duration-300 border border-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actors section */}
          <div className="w-full">
            <h3 className="text-white text-lg font-semibold mb-4 text-center lg:text-left">{t.actors}</h3>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              {actorStartIndex > 0 && (
                <button 
                  onClick={prevActors}
                  className="flex items-center justify-center p-1 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
              )}

              <div className="flex space-x-2 overflow-x-auto">
                {visibleActors.map((actor, index) => (
                  <div key={actorStartIndex + index} className="text-center group cursor-pointer flex-shrink-0">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-600 group-hover:ring-blood-red transition-all duration-300 mb-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/64x64/8B0000/ffffff?text=${actor.name.split(' ').map(n => n[0]).join('')}`;
                      }}
                    />
                    <div className="text-xs text-white">
                      <p className="font-medium truncate w-10 sm:w-12">{actor.name.split(' ')[0]}</p>
                      <p className="text-gray-400 truncate w-10 sm:w-12">{actor.character.split(' ')[0]}</p>
                    </div>
                  </div>
                ))}
              </div>

              {actorStartIndex < castMembers.length - 4 && (
                <button 
                  onClick={nextActors}
                  className="flex items-center justify-center p-1 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </section>
    </>
  );
}