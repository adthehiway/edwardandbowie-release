import { useState } from "react";
import { Play, ShoppingCart, User, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import terrifierMainImage from "@assets/terrifiermain_1751015810320.jpg";
import superfineLogoImage from "@assets/supefine-logo-final_1751015639731.png";

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
  { name: "Lauren LaVera", character: "Sienna", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Elliott Fullam", character: "Jonathan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Sarah Voigt", character: "Barbara", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Casey Hartnett", character: "Allie", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Charlie McElveen", character: "Jeff", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
];

export default function HeroSection() {
  const [showPosters, setShowPosters] = useState(false);
  const [showActors, setShowActors] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={terrifierMainImage} 
          alt="Art the Clown terrorizing" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        {/* Left side - Movie Title and Details */}
        <div className="flex-1 max-w-2xl">
          {/* Superfine Films Logo */}
          <div className="mb-8">
            <img 
              src={superfineLogoImage} 
              alt="Superfine Films Logo" 
              className="h-16 w-auto"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-4 text-white drop-shadow-2xl">
            Terrifier 2
          </h1>
          
          <div className="text-blood-red text-lg md:text-xl font-creepster mb-6 tracking-wider">
            1h 46m • Horror, Teen Horror • 2022
          </div>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
            Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night.
          </p>
          
          {/* Director and Stars Info */}
          <div className="space-y-3 mb-8 text-gray-300">
            <div>
              <span className="text-blood-red font-semibold">Director:</span> Damien Leone
            </div>
            <div>
              <span className="text-blood-red font-semibold">Writer:</span> Damien Leone
            </div>
            <div>
              <span className="text-blood-red font-semibold">Stars:</span> Lauren LaVera, David Howard Thornton, Elliott Fullam
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-blood-red hover:bg-horror-red text-white px-6 py-3 rounded font-semibold shadow-lg">
              <Play className="mr-2 h-4 w-4" />
              TRAILER
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow-lg">
              BUY NOW
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded font-semibold">
              LEARN MORE
            </Button>
          </div>
        </div>

        {/* Right side - Posters and Actors overlay buttons */}
        <div className="flex flex-col space-y-8 items-end">
          {/* Posters button and overlay */}
          <div className="relative">
            <button
              onClick={() => setShowPosters(!showPosters)}
              className="text-white text-lg font-semibold hover:text-blood-red transition-colors"
            >
              <Film className="h-6 w-6 mr-2 inline" />
              Posters
            </button>
            
            {showPosters && (
              <div className="absolute right-0 top-12 bg-black/90 backdrop-blur-lg p-6 rounded-lg shadow-2xl w-96">
                <div className="grid grid-cols-3 gap-3">
                  {posterImages.map((poster, index) => (
                    <div key={index} className="group cursor-pointer">
                      <img
                        src={poster.src}
                        alt={poster.alt}
                        className="w-full h-24 object-cover rounded group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actors button and overlay */}
          <div className="relative">
            <button
              onClick={() => setShowActors(!showActors)}
              className="text-white text-lg font-semibold hover:text-blood-red transition-colors"
            >
              <User className="h-6 w-6 mr-2 inline" />
              Actors
            </button>
            
            {showActors && (
              <div className="absolute right-0 top-12 bg-black/90 backdrop-blur-lg p-6 rounded-lg shadow-2xl w-80">
                <div className="grid grid-cols-2 gap-4">
                  {castMembers.map((actor, index) => (
                    <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <img
                        src={actor.image}
                        alt={actor.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blood-red/30 group-hover:ring-blood-red transition-all duration-300"
                      />
                      <div>
                        <p className="text-white text-sm font-medium">{actor.name}</p>
                        <p className="text-gray-400 text-xs">{actor.character}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation dots (like in the reference image) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </section>
  );
}
