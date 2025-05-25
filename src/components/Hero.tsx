
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

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
            src="/lovable-uploads/7e4650fb-6083-4023-acfb-62fe0fe237ca.png" 
            alt="COMMARKAI Logo" 
            className="h-16 md:h-20 w-auto"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Scaling Your Business with
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
            <span>Multiplies Conversion Rates</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
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
          <p className="mb-4">AI agents are trusted by a Growing Business</p>
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
