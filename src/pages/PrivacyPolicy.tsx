import React from "react";
import { Link } from "react-router-dom"; // For the HOME button
import { Footer } from "../components/Footer"; // Adjust the path if your Footer is elsewhere

const PrivacyPolicy = () => (
  <div
    className="min-h-screen flex flex-col"
    style={{
      background: "linear-gradient(90deg, #3a3085 0%, #295eab 100%)",
    }}
  >
    {/* Top Bar: Home button left, Logo right */}
    <div className="flex justify-between items-center pt-8 px-8">
      <Link
        to="/"
        className="text-white text-xl font-bold underline hover:text-blue-200 transition-colors"
      >
        HOME
      </Link>
      <img
        src="/lovable-uploads/7e4650fb-6083-4023-acfb-62fe0fe237ca.png"
        alt="COMMARKAI Logo"
        className="h-12 w-auto"
      />
    </div>
    {/* Centered White Box */}
    <div className="flex justify-center items-start flex-1">
      <div className="bg-white shadow-xl rounded-lg p-10 mt-4 mb-8 max-w-2xl w-full text-black font-sans">
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
        {/* ...add any additional policy content here... */}
      </div>
    </div>
    {/* Footer at the bottom */}
    <Footer />
  </div>
);

export default PrivacyPolicy;
