import { Badge } from "@/components/ui/badge";
import edwardPosterImage from "@assets/IMG_0473.jpg_1756196901420.webp";

export default function MovieDetails() {
  return (
    <section className="py-20 bg-gradient-to-b from-deep-black to-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-8 text-bowie-gold">
              Edward...work in progress
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-bowie-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Director</h3>
                <p className="text-2xl font-medium">Marcus Thompson</p>
              </div>
              
              <div className="border-l-4 border-bowie-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Description</h3>
                <p className="text-lg leading-relaxed">A film by Marcus Thompson about the work of artist Edward Bell and his connection to David Bowie's 1979–80 New York period, which premiered at an event in London featuring both Bell and Thompson. The event also included a screening of Bowie's Saturday Night Live performance.</p>
              </div>
              
              <div className="border-l-4 border-bowie-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Featured Artist</h3>
                <p className="text-xl">Edward Bell</p>
              </div>
              
              <div className="border-l-4 border-bowie-red pl-6">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Genre</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-bowie-red hover:bg-bowie-gold">Documentary</Badge>
                  <Badge className="bg-bowie-red hover:bg-bowie-gold">Art</Badge>
                  <Badge className="bg-bowie-red hover:bg-bowie-gold">Music</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Poster */}
          <div className="relative animate-slide-up">
            <div className="relative group">
              <img 
                src={edwardPosterImage} 
                alt="Edward Bell art exhibition with David Bowie imagery" 
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
