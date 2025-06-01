import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/7e4650fb-6083-4023-acfb-62fe0fe237ca.png" 
              alt="COMMARKAI Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your business with AI agents that generate leads, nurture prospects, 
              and close deals 24/7. Experience the future of marketing automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/commarkai/" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://www.facebook.com/commarkai/" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Lead Generation AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Email Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>support@commarkai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 COMMARKAI. All rights reserved. |{" "}
            <a
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
