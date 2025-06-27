import { Ticket, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-horror-red to-blood-red">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
          Experience the Terror
        </h2>
        <p className="text-xl mb-8 text-gray-100">
          Don't miss the most terrifying sequel of the year
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-white text-horror-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Ticket className="mr-2 h-5 w-5" />
            Get Tickets
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-horror-red px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Info className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
