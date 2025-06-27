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
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-full"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{ display: hasError ? 'none' : 'block' }}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 rounded-full flex items-center justify-center">
          <div className="text-white text-xs font-bold">
            {alt.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      )}
    </div>
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
  
  const castMembers = t.castMembers.map((member) => ({
    ...member,
    image: actorImages[member.name] || laurenImage,
  }));
  return (
    <section className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-blood-red">
          {t.cast}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {castMembers.map((actor, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 ring-2 sm:ring-4 ring-blood-red/20 group-hover:ring-blood-red transition-all duration-300">
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
