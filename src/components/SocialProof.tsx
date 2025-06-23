export const SocialProof = () => {
  const testimonials = [
    {
      quote: "COMMARKAI's AI agents generated 150 qualified leads in our first month. Our conversion rate doubled overnight.",
      result: "150 leads, 2x conversion"
    },
    {
      quote: "The ROI is incredible. We're saving 50 hours a week while generating 3x more leads than our previous agency.",
      result: "50 hours saved, 3x leads"
    },
    {
      quote: "Our AI agent works 24/7 capturing leads we would have missed. It's like having a sales team that never sleeps.",
      result: "24/7 lead capture"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "$2M+", label: "Revenue Generated" },
    { number: "250%", label: "Average ROI" }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results That Speak for Themselves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <blockquote className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                  <div className="text-green-400 text-sm font-medium mt-1">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-2xl p-8">
            <h4 className="text-xl font-bold mb-6">Trusted & Secure</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>99.9% Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
