import React, { useState } from 'react';
import ImageGallery from "@/components/image-gallery";
import edwardPosterImage from "@assets/IMG_0473.jpg_1756196901420.webp";

const galleryImages = [
  {
    src: edwardPosterImage,
    alt: "Edward Bell art exhibition featuring David Bowie imagery and creative work",
  },
];

export default function PosterGallery() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setGalleryOpen(true);
  };

  return (
    <>
      <ImageGallery
        images={galleryImages}
        initialIndex={galleryInitialIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    <section className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-blood-red">
          Gallery
        </h2>
        
        {/* Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer max-w-md"
              onClick={() => openGallery(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}