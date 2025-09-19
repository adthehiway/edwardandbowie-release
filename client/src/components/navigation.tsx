import { ArrowLeft, Globe } from "lucide-react";

interface NavigationProps {
  language: string;
  onLanguageChange: (language: string) => void;
  translations: {
    backToWebsite: string;
  };
}

export default function Navigation({ language, onLanguageChange, translations }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800/30 backdrop-blur-sm border-b border-gray-500/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space where logo was */}
          <div className="flex items-center">
          </div>
          
          {/* Right side - Language selector only */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-white" />
              <select 
                value={language} 
                onChange={(e) => onLanguageChange(e.target.value)}
                className="w-[100px] bg-transparent border border-gray-600 text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-bowie-accent"
              >
                <option value="en" className="bg-deep-black text-white">
                  English
                </option>
                <option value="fr" className="bg-deep-black text-white">
                  French
                </option>
                <option value="de" className="bg-deep-black text-white">
                  German
                </option>
                <option value="es" className="bg-deep-black text-white">
                  Spanish
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
