
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/e1e65265-2e87-4f0f-ad4e-333219f6bf74.png" 
              alt="COMMARKAI Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Transform your business with AI agents that generate leads, nurture prospects, 
              and close deals 24/7. Experience the future of marketing automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
          <p>&copy; 2025 COMMARKAI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
