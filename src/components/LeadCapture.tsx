
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight } from "lucide-react";

export const LeadCapture = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    currentChallenges: "",
    monthlyLeadGoal: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success! 🎉",
        description: "Your free strategy call has been booked. Check your email for confirmation details.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        companySize: "",
        currentChallenges: "",
        monthlyLeadGoal: ""
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

          {/* Right side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Free Strategy Call
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll be in touch within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-700 font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-700 font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Business Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companySize" className="text-gray-700 font-medium">
                    Company Size
                  </Label>
                  <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="monthlyLeadGoal" className="text-gray-700 font-medium">
                    Monthly Lead Goal
                  </Label>
                  <Select value={formData.monthlyLeadGoal} onValueChange={(value) => handleInputChange("monthlyLeadGoal", value)}>
                    <SelectTrigger className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-50">10-50 leads</SelectItem>
                      <SelectItem value="51-100">51-100 leads</SelectItem>
                      <SelectItem value="101-500">101-500 leads</SelectItem>
                      <SelectItem value="500+">500+ leads</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="currentChallenges" className="text-gray-700 font-medium">
                  What's your biggest marketing challenge?
                </Label>
                <Textarea
                  id="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                  rows={3}
                  className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  placeholder="Tell us about your current lead generation challenges..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  "Booking Your Call..."
                ) : (
                  <>
                    Book My Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to receive communications from COMMARKAI. 
                We respect your privacy and never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
