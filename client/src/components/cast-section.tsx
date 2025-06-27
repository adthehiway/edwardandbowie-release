const castMembers = [
  { name: "Lauren LaVera", character: "Sienna Shaw", image: "https://m.media-amazon.com/images/M/MV5BYjUwNzc0NzktYWY0Yi00NGFlLWE5NGEtY2NjMzZmMzI3Y2JhXkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "David Howard Thornton", character: "Art the Clown", image: "https://m.media-amazon.com/images/M/MV5BNTcyNDQyODAtNGRjMy00YzA5LTliOWUtY2ZjNTVjNDYwZGE1XkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Elliott Fullam", character: "Jonathan Shaw", image: "https://m.media-amazon.com/images/M/MV5BZTQ0MjUxMzYtN2IxZS00MWZmLWE3MWMtYWMzOGNiNzE2ODg1XkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Sarah Voigt", character: "Barbara Shaw", image: "https://m.media-amazon.com/images/M/MV5BMjEyZGE3ZGYtOTk4Mi00NDVjLThmMDctNTg1MDQ2MWZjNGZhXkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Kailey Hyman", character: "Brooke", image: "https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2NV5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Casey Hartnett", character: "Allie", image: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOV5BMl5BanBnXkFtZTgwNjU2OTk5NjE@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Amelie McLain", character: "The Little Pale Girl", image: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlYi00YzBkLWE4ODEtMWQ4ZWYxZjdkYTU1XkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Samantha Scaffidi", character: "Victoria Heyes", image: "https://m.media-amazon.com/images/M/MV5BMTU1MDk1MDQwNV5BMl5BanBnXkFtZTgwNzQ2MTM3MzE@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Felissa Rose", character: "The Clown Cafe Host", image: "https://m.media-amazon.com/images/M/MV5BMTExMzc0MDEtNWFmOS00ZTc1LWJkOWItMzIwOTBmZDIyMzBlXkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
  { name: "Chris Jericho", character: "Burke", image: "https://m.media-amazon.com/images/M/MV5BMjQ5NzU0MTAtZWFhYy00ZjcwLTkyMjMtNDZlYzE1YmJjMWVkXkEyXkFqcGc@._V1_UX150_CR0,0,150,150_AL_.jpg" },
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
