
import { CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "3x More Qualified Leads",
      description: "Our AI agents work 24/7 to identify and qualify prospects, delivering 3x more qualified leads than traditional methods.",
      stat: "300% increase"
    },
    {
      icon: Clock,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive marketing tasks and focus on strategy while AI handles execution and optimization.",
      stat: "40+ hours saved"
    },
    {
      icon: DollarSign,
      title: "250% ROI on Average",
      description: "Our clients see an average 250% return on investment within the first 90 days of implementation.",
      stat: "250% ROI"
    },
    {
      icon: CheckCircle,
      title: "99.9% Uptime Guarantee",
      description: "Your AI agents never sleep, never take breaks, and work with 99.9% uptime to capture every opportunity.",
      stat: "99.9% uptime"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose COMMARKAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their marketing with our AI agents. 
            See real results in weeks, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {benefit.stat}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to 3x Your Lead Generation?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Book a free strategy call to see how our AI agents can transform your business in the next 30 days.
            </p>
            <button 
              onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Your Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
