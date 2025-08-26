import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-cinzel font-bold text-bowie-gold mb-4">
              Art Decade Films
            </div>
            <p className="text-gray-400 mb-4">
              Exploring the intersection of art, music, and creativity through documentary filmmaking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Catalogue</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Submit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bowie-gold transition-colors duration-300">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Art Decade Films. All rights reserved. | Edward...work in progress directed by Marcus Thompson
          </p>
        </div>
      </div>
    </footer>
  );
}
