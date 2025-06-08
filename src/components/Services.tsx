
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Lead Generation AI Agents",
      description: "Intelligent agents that identify, qualify, and capture high-quality leads from multiple channels automatically.",
      features: ["Multi-channel prospecting", "Lead scoring & qualification", "CRM integration", "Real-time notifications"]
    },
    {
      title: "Conversational Sales Bots",
      description: "AI-powered chatbots that engage prospects, answer questions, and guide them through your sales funnel.",
      features: ["Natural language processing", "24/7 availability", "Personalized conversations", "Appointment booking"]
    },
    {
      title: "Email Marketing Automation",
      description: "Smart email sequences that nurture leads with personalized content and optimal send times.",
      features: ["Behavioral triggers", "A/B testing", "Performance analytics", "Deliverability optimization"]
    },
    {
      title: "Social Media AI Agents",
      description: "Automated social media management that engages with prospects and builds your brand presence.",
      features: ["Content generation", "Engagement automation", "Hashtag optimization", "Competitor analysis"]
    },
    {
      title: "Customer Support Automation",
      description: "AI agents that provide instant customer support while identifying upsell opportunities.",
      features: ["Instant responses", "Issue resolution", "Escalation protocols", "Satisfaction tracking"]
    },
    {
      title: "Analytics & Optimization",
      description: "Advanced AI analytics that optimize your entire marketing funnel for maximum ROI.",
      features: ["Performance tracking", "Predictive insights", "ROI optimization", "Custom dashboards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent AI agents work around the clock to automate your entire marketing and sales process, 
            delivering consistent results while you focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
