import React from 'react';
import { RefreshCw } from 'lucide-react';

interface TShirtMockupProps {
  design?: {
    text: string;
    style: string;
    color: string;
  } | null;
  isGenerating?: boolean;
}

const TShirtMockup: React.FC<TShirtMockupProps> = ({ design, isGenerating }) => {
  return (
    <div className="relative w-80 h-96 mx-auto">
      {/* T-Shirt Base */}
      <svg
        viewBox="0 0 300 360"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* T-Shirt Shape */}
        <path
          d="M75 80 L75 60 Q75 50 85 50 L100 50 Q110 40 120 40 L180 40 Q190 40 200 50 L215 50 Q225 50 225 60 L225 80 L250 100 L250 120 L225 110 L225 340 Q225 350 215 350 L85 350 Q75 350 75 340 L75 110 L50 120 L50 100 Z"
          fill="#ffffff"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        
        {/* Design Area */}
        {isGenerating ? (
          <g>
            <rect x="100" y="120" width="100" height="80" fill="#f3f4f6" rx="8" />
            <RefreshCw 
              x="140" 
              y="150" 
              width="20" 
              height="20" 
              className="animate-spin"
              fill="#9ca3af"
            />
          </g>
        ) : design ? (
          <g>
            {/* Background for text */}
            <rect 
              x="90" 
              y="120" 
              width="120" 
              height="100" 
              fill="transparent" 
              rx="8" 
            />
            
            {/* Design Text */}
            <text
              x="150"
              y="150"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="#1f2937"
              className="font-serif"
            >
              {design.text.split(' ').slice(0, 3).join(' ')}
            </text>
            
            {design.text.split(' ').length > 3 && (
              <text
                x="150"
                y="170"
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="#1f2937"
                className="font-serif"
              >
                {design.text.split(' ').slice(3, 6).join(' ')}
              </text>
            )}
            
            {/* Decorative Elements based on style */}
            {design.style.includes('minimalist') && (
              <circle cx="150" cy="190" r="2" fill="#9ca3af" />
            )}
            
            {design.style.includes('bold') && (
              <>
                <line x1="100" y1="200" x2="200" y2="200" stroke="#4f46e5" strokeWidth="3" />
                <line x1="100" y1="205" x2="200" y2="205" stroke="#ec4899" strokeWidth="2" />
              </>
            )}
            
            {design.style.includes('artistic') && (
              <>
                <circle cx="120" cy="140" r="3" fill="#f59e0b" opacity="0.7" />
                <circle cx="180" cy="180" r="2" fill="#10b981" opacity="0.7" />
                <circle cx="130" cy="190" r="2" fill="#ef4444" opacity="0.7" />
              </>
            )}
          </g>
        ) : (
          <g>
            <rect x="100" y="140" width="100" height="60" fill="#f9fafb" rx="8" opacity="0.5" />
            <text
              x="150"
              y="175"
              textAnchor="middle"
              fontSize="12"
              fill="#9ca3af"
            >
              Your design will
            </text>
            <text
              x="150"
              y="190"
              textAnchor="middle"
              fontSize="12"
              fill="#9ca3af"
            >
              appear here
            </text>
          </g>
        )}
      </svg>
      
      {/* Loading Overlay */}
      {isGenerating && (
        <div className="absolute inset-0 bg-black/10 rounded-lg flex items-center justify-center">
          <div className="bg-white/90 rounded-lg px-4 py-2 flex items-center space-x-2">
            <RefreshCw className="h-4 w-4 animate-spin text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Creating...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TShirtMockup;