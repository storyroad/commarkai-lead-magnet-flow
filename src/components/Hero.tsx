
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
        {/* Logo - now using headline size with tripled top margin */}
        <div className="mb-8 mt-24 flex justify-center">
          <img 
            src="/lovable-uploads/7e4650fb-6083-4023-acfb-62fe0fe237ca.png" 
            alt="COMMARKAI Logo" 
            className="h-16 md:h-24 lg:h-28 w-auto"
          />
        </div>

        {/* Main headline - now using logo size and AI AGENTS in uppercase */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-16 leading-tight mt-6">
          Scaling Your Business with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
            AI AGENTS
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

        {/* AI Workflow Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">AI-Powered Workflow Integration</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {/* Social Media Platforms */}
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/6bad3d8f-12eb-4131-918b-eef14efc81b7.png" alt="Facebook" className="w-12 h-12" />
              <img src="/lovable-uploads/8e563460-cd02-40b2-9930-05b8ea833e3d.png" alt="X (Twitter)" className="w-12 h-12" />
              <img src="/lovable-uploads/df27a262-d575-4d0b-8138-50b38f5ce81e.png" alt="Messenger" className="w-12 h-12" />
              <img src="/lovable-uploads/9d2b25a8-5a1f-44f7-98ea-1d44cef9946b.png" alt="WhatsApp" className="w-12 h-12" />
            </div>
            
            {/* 3D Arrow with seamless motion */}
            <div className="relative">
              <div className="text-white text-3xl font-bold transform perspective-1000 rotate-y-12 drop-shadow-lg animate-pulse">
                <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">→</span>
              </div>
              <div className="absolute inset-0 text-white text-3xl font-bold transform perspective-1000 rotate-y-12 blur-sm opacity-50 animate-pulse delay-500">
                <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">→</span>
              </div>
            </div>
            
            {/* COMMARKAI Agent */}
            <div className="flex items-center">
              <img src="/lovable-uploads/915e724c-7346-47d4-9732-746070b5eeee.png" alt="COMMARKAI Agent" className="w-16 h-16" />
            </div>
            
            {/* 3D Arrow with seamless motion */}
            <div className="relative">
              <div className="text-white text-3xl font-bold transform perspective-1000 rotate-y-12 drop-shadow-lg animate-pulse">
                <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">→</span>
              </div>
              <div className="absolute inset-0 text-white text-3xl font-bold transform perspective-1000 rotate-y-12 blur-sm opacity-50 animate-pulse delay-500">
                <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">→</span>
              </div>
            </div>
            
            {/* CRM Systems */}
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/eb14992a-8329-4d34-93f1-d06e292a6e35.png" alt="Salesforce" className="w-12 h-12" />
              <img src="/lovable-uploads/fcf1dab8-d005-4a16-9da8-1552ecddb485.png" alt="HubSpot" className="w-12 h-12" />
              <img src="/lovable-uploads/d391af3a-33f9-440e-922d-fe3e61504567.png" alt="CRM Integration" className="w-12 h-12" />
              <img src="/lovable-uploads/683f4c63-c506-4af2-b9b5-da3a1b9cc2f8.png" alt="MailChimp" className="w-12 h-12" />
            </div>
          </div>
          <p className="text-gray-300 text-lg mb-4">
            Seamlessly integrate across all your platforms for maximum reach and efficiency
          </p>
          <p className="text-gray-300 text-lg font-semibold">
            And Much More
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-gray-400">
          <p className="mb-4">AI agents are trusted by a growing number of businesses</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm">★★★★★ 4.9/5 Rating</div>
            <div className="text-sm">|</div>
            <div className="text-sm">$2M+ Revenue Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};
