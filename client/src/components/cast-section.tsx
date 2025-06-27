const castMembers = [
  { name: "Lauren LaVera", character: "Sienna", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Elliott Fullam", character: "Jonathan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Sarah Voigt", character: "Barbara", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Casey Hartnett", character: "Allie", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Charlie McElveen", character: "Jeff", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Johnath Davis", character: "Ricky", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Samantha Scaffidi", character: "Victoria Heyes", image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Leah Voysey", character: "Clown Cafe Host", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
  { name: "Chris Jericho", character: "Burke", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" },
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
