import { Ticket, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations, Language } from "@/lib/translations";

interface CTASectionProps {
  language: Language;
}

export default function CTASection({ language }: CTASectionProps) {
  const t = translations[language];
  return (
    <section className="py-20 bg-gradient-to-r from-horror-red to-blood-red">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold mb-6">
          Discover the Art
        </h2>
        <p className="text-xl mb-8 text-gray-100">
          Explore the connection between Edward Bell and David Bowie's creative period
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="bg-white text-horror-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <a href="https://www.davidbowienews.com" target="_blank" rel="noopener noreferrer">
              <Ticket className="mr-2 h-5 w-5" />
              {t.getTickets}
            </a>
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-horror-red px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            <Info className="mr-2 h-5 w-5" />
            {t.learnMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
