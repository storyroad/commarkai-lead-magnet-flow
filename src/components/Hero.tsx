
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

export const Hero = () => {
  const scrollToLeadCapture = () => {
    document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/e1e65265-2e87-4f0f-ad4e-333219f6bf74.png" 
            alt="COMMARKAI Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Scale Your Business with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
            AI Agents
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your marketing with intelligent AI agents that work 24/7 to generate leads, 
          nurture prospects, and close deals while you sleep.
        </p>

        {/* Value proposition points */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-white">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-400" />
            <span>24/7 Lead Generation</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" />
            <span>Automated Follow-ups</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-400" />
            <span>3x Conversion Rates</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToLeadCapture}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Agent Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Watch Case Study
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-gray-400">
          <p className="mb-4">Trusted by 500+ Growing Businesses</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm">★★★★★ 4.9/5 Rating</div>
            <div className="text-sm">|</div>
            <div className="text-sm">$2M+ Revenue Generated</div>
            <div className="text-sm">|</div>
            <div className="text-sm">98% Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
