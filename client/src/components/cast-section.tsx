import { translations, Language } from "@/lib/translations";

interface CastSectionProps {
  language: Language;
}

export default function CastSection({ language }: CastSectionProps) {
  const t = translations[language];
  const castMembers = t.castMembers.map((member, index) => ({
    ...member,
    image: `https://via.placeholder.com/150x150/8B0000/ffffff?text=${member.name.split(' ').map(n => n[0]).join('')}`
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
                <img 
                  src={actor.image} 
                  alt={`${actor.name} portrait`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/150x150/8B0000/ffffff?text=${actor.name.split(' ').map(n => n[0]).join('')}`;
                  }}
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
