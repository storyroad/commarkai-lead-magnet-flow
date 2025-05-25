
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export const LeadCapture = () => {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script');
    script.src = '//js-na3.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
    
    script.onload = () => {
      // Create the form once the script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "341849546",
          formId: "7fccfc47-edaa-4c86-845d-98f1fdb43433",
          region: "na3",
          target: "#hubspot-form"
        });
      }
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="lead-capture" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free AI Agent Strategy Call
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how AI agents can 3x your lead generation in just 30 days. 
              Book a free strategy call with our experts.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom AI agent strategy for your business",
                "Live demo of AI agents in action",
                "30-day implementation roadmap",
                "ROI projection and cost analysis",
                "Free trial setup (if qualified)"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-bold text-lg mb-2">⏰ Limited Time Offer</h4>
              <p className="text-gray-300">
                Book this week and get a FREE AI agent setup (worth $2,500) when you qualify for our program.
              </p>
            </div>
          </div>

          {/* Right side - HubSpot Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Free Strategy Call
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll be in touch within 24 hours
              </p>
            </div>

            {/* HubSpot Form Container */}
            <div id="hubspot-form"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
