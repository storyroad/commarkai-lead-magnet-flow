import React from 'react';

export default function BookCallButton() {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/commarkai-support/30min' // Replace with your actual Calendly link!
    });
    return false;
  };

  return (
    <button 
      onClick={openCalendly} className="cta-btn">
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold shadow hover:from-purple-600 hover:to-blue-600 transition"
    >
      Book a Call
    </button>
  );
}
