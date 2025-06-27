import terrifier3Image from "@assets/Terrifier 3_1751015810318.jpg";
import terrifier4Image from "@assets/Terrifier 4_1751015810319.jpg";
import terrifier5Image from "@assets/terrifier 5_1751015810319.jpg";
import terrifier10Image from "@assets/terrifier 10_1751015810319.jpg";
import terrifier1Image from "@assets/terrifier1_1751015810320.jpg";
import terrifier6Image from "@assets/Terrifier6_1751015810320.jpg";

const galleryImages = [
  {
    src: terrifier3Image,
    alt: "Terrifier 3 scene with character wearing angel wings",
  },
  {
    src: terrifier4Image,
    alt: "Terrifier 4 scene with bloodied male character",
  },
  {
    src: terrifier5Image,
    alt: "Terrifier 5 featuring menacing clown character with rotting teeth",
  },
  {
    src: terrifier10Image,
    alt: "Terrifier 10 showing clown figure in red atmospheric lighting",
  },
  {
    src: terrifier1Image,
    alt: "Terrifier 1 scene with Art the Clown near vintage television",
  },
  {
    src: terrifier6Image,
    alt: "Terrifier 6 featuring disturbing doll character in dark setting",
  },
];

export default function PosterGallery() {
  return (
    <section className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-blood-red">
          Gallery
        </h2>
        
        {/* Poster Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
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
  );
}
