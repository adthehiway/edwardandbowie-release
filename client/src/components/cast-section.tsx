const castMembers = [
  { name: "Lauren LaVera", character: "Sienna Shaw", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Lauren+LaVera" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=David+Thornton" },
  { name: "Elliott Fullam", character: "Jonathan Shaw", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Elliott+Fullam" },
  { name: "Sarah Voigt", character: "Barbara Shaw", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Sarah+Voigt" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Kailey+Hyman" },
  { name: "Casey Hartnett", character: "Allie", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Casey+Hartnett" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Amelie+McLain" },
  { name: "Samantha Scaffidi", character: "Victoria Heyes", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Samantha+Scaffidi" },
  { name: "Felissa Rose", character: "The Clown Cafe Host", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Felissa+Rose" },
  { name: "Chris Jericho", character: "Burke", image: "https://via.placeholder.com/150x150/8B0000/ffffff?text=Chris+Jericho" },
];

export default function CastSection() {
  return (
    <section className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-blood-red">
          Cast
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
