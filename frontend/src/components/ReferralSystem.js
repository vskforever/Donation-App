import React, { useState } from 'react';
import './ReferralSystem.css'; // Optional: For additional styling if needed

function ReferralSystem() {
  const [copySuccess, setCopySuccess] = useState('');
  const referralCode = 'ABC123'; // Replace with the user's actual referral code (dynamic)
  const donationLink = `https://www.example.com/donate?ref=${referralCode}`; // The donation link with referral code

  // Function to copy the donation link to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink).then(
      () => {
        setCopySuccess('Link copied to clipboard!');
      },
      (err) => {
        console.error('Could not copy text: ', err);
        setCopySuccess('Failed to copy the link.');
      }
    );
  };

  // Function to share the donation link on WhatsApp
  const shareOnWhatsApp = () => {
    const whatsappMessage = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="referral-system">
      <h2>Your Referral Code</h2>
      <p><strong>{referralCode}</strong></p>

      <div className="buttons">
        <button onClick={copyToClipboard} className="copy-btn">
          Copy Donation Link
        </button>
        <button onClick={shareOnWhatsApp} className="whatsapp-btn">
          Share on WhatsApp
        </button>
      </div>

      {copySuccess && <p className="copy-success">{copySuccess}</p>}
    </div>
  );
}

export default ReferralSystem;
