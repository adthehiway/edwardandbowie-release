import { ArrowLeft } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Empty space where logo was */}
          <div className="flex items-center">
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
