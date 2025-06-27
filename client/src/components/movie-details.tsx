import { Badge } from "@/components/ui/badge";
import terrifier2PosterImage from "@assets/Terrifier 2_1751015810318.jpg";

export default function MovieDetails() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8 text-blood-red">
              Film Details
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blood-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Director</h3>
                <p className="text-2xl font-medium">Damien Leone</p>
              </div>
              
              <div className="border-l-4 border-blood-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Writer</h3>
                <p className="text-2xl font-medium">Damien Leone</p>
              </div>
              
              <div className="border-l-4 border-blood-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Stars</h3>
                <p className="text-xl">Lauren LaVera, David Howard Thornton, Elliott Fullam</p>
              </div>
              
              <div className="border-l-4 border-blood-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Genre</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blood-red hover:bg-horror-red">Horror</Badge>
                  <Badge className="bg-blood-red hover:bg-horror-red">Teen Horror</Badge>
                  <Badge className="bg-blood-red hover:bg-horror-red">Body Horror</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Poster */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              <img 
                src={terrifier2PosterImage} 
                alt="Terrifier 2 poster featuring woman and Art the Clown" 
                className="w-full rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
