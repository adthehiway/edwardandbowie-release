import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-cinzel font-bold text-blood-red">
              Superfine Films
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-white hover:text-blood-red transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Catalogue
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Submit
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-300 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-black/95">
              <a href="#" className="text-white hover:text-blood-red block px-3 py-2 text-base font-medium">
                Catalogue
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red block px-3 py-2 text-base font-medium">
                Submit
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-blood-red block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
