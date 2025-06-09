import { useState, useEffect } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Show preloader for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Gold spinning ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 animate-spin"></div>
        </div>
        
        {/* GoldMandate text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">GoldMandate</h2>
          <p className="text-sm text-gray-600">Loading...</p>
        </div>
        
        {/* Loading dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;