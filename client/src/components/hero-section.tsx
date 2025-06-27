import { Play, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import terrifierMainImage from "@assets/terrifiermain_1751015810320.jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Main background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={terrifierMainImage} 
          alt="Art the Clown terrorizing" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 text-white drop-shadow-2xl">
          TERRIFIER 2
        </h1>
        <div className="text-blood-red text-lg md:text-xl font-creepster mb-8 tracking-wider">
          Horror • Teen Horror • Body Horror
        </div>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Resurrected by a sinister entity, Art the Clown returns to Miles County to terrorize a teenage girl and her younger brother on Halloween night.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-blood-red hover:bg-horror-red text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Buy Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
