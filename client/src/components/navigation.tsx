import { ArrowLeft, Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NavigationProps {
  language: string;
  onLanguageChange: (language: string) => void;
  translations: {
    backToWebsite: string;
  };
}

export default function Navigation({ language, onLanguageChange, translations }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space where logo was */}
          <div className="flex items-center">
          </div>
          
          {/* Right side - Language selector and Back to website button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-white" />
              <Select value={language} onValueChange={onLanguageChange}>
                <SelectTrigger className="w-[100px] bg-transparent border-gray-600 text-white text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-deep-black border-gray-600">
                  <SelectItem value="en" className="text-white hover:bg-gray-800">
                    English
                  </SelectItem>
                  <SelectItem value="hi" className="text-white hover:bg-gray-800">
                    हिंदी
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Back to website button */}
            <div>
              <a href="https://www.superfinefilms.net/" className="flex items-center text-white hover:text-blood-red transition-colors duration-300 px-4 py-2 text-sm font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {translations.backToWebsite}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
