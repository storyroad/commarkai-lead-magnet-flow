import React from 'react';

export default function BookCallButton() {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/your-calendly-link' // Replace with your actual Calendly link!
    });
    return false;
  };

  return (
    <button onClick={openCalendly} className="cta-btn">
      Book a Call
    </button>
  );
}
