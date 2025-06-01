import React from "react";
import { Link } from "react-router-dom"; // For the HOME button

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col" style={{
    background: "linear-gradient(90deg, #3a3085 0%, #295eab 100%)" // Change this gradient to your site’s background if needed
  }}>
    <div className="flex-1 flex flex-col">
      {/* HOME button */}
      <div className="pt-8 pl-8">
        <Link
          to="/"
          className="text-white text-xl font-bold underline hover:text-blue-200 transition-colors"
        >
          HOME
        </Link>
      </div>
      {/* Centered white box */}
      <div className="flex justify-center items-start flex-1">
        <div className="bg-white shadow-xl rounded-lg p-10 mt-4 mb-8 max-w-2xl w-full text-black font-sans">
          {/* --- Put your Privacy Policy content here --- */}
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            <strong>Last updated: June 1, 2025</strong>
          </p>
          <p className="mb-4">
            COMMARKAI (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">1. What Information We Collect</h2>
          <ul className="mb-4 list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website (like IP address, browser type, and pages visited).</li>
            <li><strong>Cookies:</strong> We use cookies to remember your preferences and understand how you use our site.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>To provide and improve our services.</li>
            <li>To communicate with you about updates, offers, or support.</li>
            <li>To keep our website safe and secure.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
          <p className="mb-4">
            We do <strong>not</strong> sell your personal information. We may share your information only with:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>Trusted partners who help us run the website (like hosting or email services).</li>
            <li>Law enforcement if required by law.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">4. Your Choices</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>You can ask us to see, change, or delete your information at any time.</li>
            <li>You can opt out of marketing emails by clicking “unsubscribe” in any email from us.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-8 mb-2">5. Security</h2>
          <p className="mb-4">
            We do our best to keep your information safe, but remember that no method is 100% secure.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">6. Children’s Privacy</h2>
          <p className="mb-4">
            Our services are not meant for children under 13, and we do not knowingly collect information from them.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. If we make big changes, we’ll let you know on our website.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please email us at <a href="mailto:support@commarkai.com" className="text-blue-600 underline">support@commarkai.com</a>
          </p>
        </div>
      </div>
    </div>
    {/* Footer stays at the bottom */}
    <footer>
      {/* Place your existing Footer component here */}
    </footer>
  </div>
);

export default PrivacyPolicy;
