import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import ameliaImage from "@assets/Amelia Mclain_1751019649583.png";
import caseyImage from "@assets/Casey Hartnett_1751019649583.png";
import charlieImage from "@assets/Charlie McElveen_1751019649583.png";
import davidImage from "@assets/David Howard_1751019649583.png";
import elliottImage from "@assets/Ellioit Fullam_1751019649583.png";
import laurenImage from "@assets/Lauren Lavera_1751019649584.png";
import sarahImage from "@assets/Sarah Voigt_1751019649583.png";

interface CastSectionProps {
  language: Language;
}

interface ActorImageProps {
  src: string;
  alt: string;
  className: string;
}

const ActorImage: React.FC<ActorImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800/50 animate-pulse rounded-full"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        loading="eager"
      />
    </>
  );
};

export default function CastSection({ language }: CastSectionProps) {
  const t = translations[language];
  
  // Map of actor names to their actual images
  const actorImages: { [key: string]: string } = {
    "Lauren LaVera": laurenImage,
    "Elliott Fullam": elliottImage,
    "Sarah Voigt": sarahImage,
    "Casey Hartnett": caseyImage,
    "Charlie McElveen": charlieImage,
    "Amelie McLain": ameliaImage, // Using actual name from translations
    "David Howard Thornton": davidImage,
  };
  
  // Since this is now about Edward Bell and David Bowie documentary, we'll create a simple cast list
  const castMembers = [
    { name: "Edward Bell", character: "Featured Artist", image: charlieImage },
    { name: "Marcus Thompson", character: "Director", image: davidImage },
  ];
  return (
    <section className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-bowie-gold">
          {t.cast}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {castMembers.map((actor, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto mb-3 sm:mb-4 ring-2 sm:ring-4 ring-bowie-red/20 group-hover:ring-bowie-gold transition-all duration-300">
                <ActorImage
                  src={actor.image}
                  alt={`${actor.name} portrait`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-white text-sm sm:text-base truncate">{actor.name}</h3>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
