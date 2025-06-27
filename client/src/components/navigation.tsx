import { ArrowLeft } from "lucide-react";
import superfineLogoImage from "@assets/supefine-logo-final_1751015639731.png";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={superfineLogoImage} 
              alt="Superfine Films" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Back to website button */}
          <div>
            <button className="flex items-center text-white hover:text-blood-red transition-colors duration-300 px-4 py-2 text-sm font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to website
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
