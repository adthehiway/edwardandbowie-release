import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/image-gallery";
import terrifierMainImage from "@assets/terrifiermain_1751015810320.jpg";

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

const castMembers = [
  { name: "Lauren LaVera", character: "Sienna Shaw", image: "https://images.unsplash.com/photo-1494790108755-2616b612d7c2?w=150&h=150&fit=crop&crop=face" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { name: "Elliott Fullam", character: "Jonathan Shaw", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
  { name: "Sarah Voigt", character: "Barbara Shaw", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  { name: "Samantha Scaffidi", character: "Victoria Heyes", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
  { name: "Chris Jericho", character: "Burke", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
  { name: "Casey Hartnett", character: "Allie", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
  { name: "Felissa Rose", character: "The Clown Cafe Host", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
];

export default function HeroSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);
  const [actorStartIndex, setActorStartIndex] = useState(0);

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setGalleryOpen(true);
  };

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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Left side - Movie Title and Details */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-4 text-white drop-shadow-2xl">
            Terrifier 2
          </h1>
          
          <div className="text-blood-red text-lg md:text-xl font-creepster mb-6 tracking-wider">
            1h 46m • Horror, Teen Horror • 2022
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
            Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-blood-red hover:bg-horror-red text-white px-6 py-3 rounded font-semibold shadow-lg">
              <Play className="mr-2 h-4 w-4" />
              TRAILER
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow-lg">
              BUY NOW
            </Button>
          </div>
        </div>

        {/* Right side - Posters and Actors sections */}
        <div className="flex flex-col space-y-8 items-end max-w-md">
          {/* Posters section */}
          <div className="w-full">
            <h3 className="text-white text-lg font-semibold mb-4">Posters</h3>
            <div className="grid grid-cols-5 gap-2">
              {posterImages.slice(0, 5).map((poster, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => openGallery(index)}
                >
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-16 object-cover rounded group-hover:scale-105 transition-transform duration-300 border border-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Actors section */}
          <div className="w-full">
            <h3 className="text-white text-lg font-semibold mb-4">Actors</h3>
            <div className="flex items-center space-x-3">
              {actorStartIndex > 0 && (
                <button 
                  onClick={prevActors}
                  className="flex items-center justify-center p-1 hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
              )}
              
              <div className="flex space-x-3">
                {visibleActors.map((actor, index) => (
                  <div key={actorStartIndex + index} className="text-center group cursor-pointer">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-600 group-hover:ring-blood-red transition-all duration-300 mb-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/64x89/666666/ffffff?text=${actor.name.split(' ').map(n => n[0]).join('')}`;
                      }}
                    />
                    <div className="text-xs text-white">
                      <p className="font-medium">{actor.name.split(' ')[0]}</p>
                      <p className="text-gray-400 truncate w-12">{actor.character}</p>
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
