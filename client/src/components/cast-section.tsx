const castMembers = [
  { name: "Lauren LaVera", character: "Sienna Shaw", image: "https://images.unsplash.com/photo-1494790108755-2616b612d7c2?w=150&h=150&fit=crop&crop=face" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { name: "Elliott Fullam", character: "Jonathan Shaw", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
  { name: "Sarah Voigt", character: "Barbara Shaw", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
  { name: "Casey Hartnett", character: "Allie", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
  { name: "Samantha Scaffidi", character: "Victoria Heyes", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" },
  { name: "Felissa Rose", character: "The Clown Cafe Host", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
  { name: "Chris Jericho", character: "Burke", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
];

export default function CastSection() {
  return (
    <section className="py-20 bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-12 text-center text-blood-red">
          Cast
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {castMembers.map((actor, index) => (
            <div key={index} className="group text-center">
              <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 ring-4 ring-blood-red/20 group-hover:ring-blood-red transition-all duration-300">
                <img 
                  src={actor.image} 
                  alt={`${actor.name} portrait`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/150x150/666666/ffffff?text=${actor.name.split(' ').map(n => n[0]).join('')}`;
                  }}
                />
              </div>
              <h3 className="font-semibold text-white">{actor.name}</h3>
              <p className="text-sm text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
