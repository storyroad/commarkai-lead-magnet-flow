import React from 'react';

export default function BookCallButton() {
  const openCalendly = () => {
    window.open('https://calendly.com/commarkai-support/30min', '_blank');
    return false;
  };

  return (
    <button 
      onClick={openCalendly}
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold shadow hover:from-purple-600 hover:to-blue-600 transition"
    >
      Book a Call
    </button>
  );
}
