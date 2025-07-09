import React, { useState } from 'react';
import { Sparkles, Download, ShoppingCart, RefreshCw } from 'lucide-react';
import TShirtMockup from './TShirtMockup';
import { generateDesignIdea } from '../utils/mockAI';

const DesignPage: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedDesign, setGeneratedDesign] = useState<{
    text: string;
    style: string;
    color: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDesign = async () => {
    if (!userInput.trim()) return;

    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const design = generateDesignIdea(userInput);
    setGeneratedDesign(design);
    setIsGenerating(false);
  };

  const handleDownload = () => {
    // Placeholder for download functionality
    alert('Download functionality will be implemented with canvas/SVG export');
  };

  const handleBuyNow = () => {
    // Placeholder for Printful integration
    alert('Buy Now functionality will be integrated with Printful API');
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Design Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Perfect Tee
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Tell us your mood, share a quote, or describe your vibe. Our AI will create a unique design just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-purple-400" />
                What's Your Vibe?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 font-medium mb-3">
                    Describe your mood, quote, or idea:
                  </label>
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="e.g., 'Feeling unstoppable today', 'Stay wild moon child', 'Coffee and confidence', 'Minimalist sunset vibes'..."
                    className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  onClick={handleGenerateDesign}
                  disabled={!userInput.trim() || isGenerating}
                  className="w-full group flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>Generating Magic...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Generate Design</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Ideas */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Need Inspiration?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Feeling grateful today',
                  'Adventure awaits',
                  'Good vibes only',
                  'Stay curious',
                  'Dream big, work hard',
                  'Be kind, be bold'
                ].map((idea, index) => (
                  <button
                    key={index}
                    onClick={() => setUserInput(idea)}
                    className="text-left px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all duration-200 text-sm"
                  >
                    "{idea}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Your Design Preview
              </h2>
              
              <div className="flex justify-center mb-8">
                <TShirtMockup 
                  design={generatedDesign}
                  isGenerating={isGenerating}
                />
              </div>

              {generatedDesign && (
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Design Details:</h3>
                    <p className="text-white/70 text-sm mb-2">
                      <span className="font-medium">Text:</span> {generatedDesign.text}
                    </p>
                    <p className="text-white/70 text-sm mb-2">
                      <span className="font-medium">Style:</span> {generatedDesign.style}
                    </p>
                    <p className="text-white/70 text-sm">
                      <span className="font-medium">Color Scheme:</span> {generatedDesign.color}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Design</span>
                    </button>
                    
                    <button
                      onClick={handleBuyNow}
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Buy Now - $24.99</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {!generatedDesign && !isGenerating && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-12 w-12 text-white/40" />
                </div>
                <p className="text-white/60">
                  Enter your idea above and click "Generate Design" to see your custom T-shirt come to life!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;