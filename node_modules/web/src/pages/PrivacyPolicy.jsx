import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to our Computer Academy. Your privacy is very important to us.
        This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect personal information such as your name, email address, and phone number
        when you fill out enquiry forms on our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        The information collected is used only to respond to your enquiries, provide course
        details, and communicate with you regarding our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We do not sell, trade, or share your personal information with any third parties.
        Your data is securely handled and only accessible to authorized personnel.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Email Communication</h2>
      <p className="mb-4">
        When you submit an enquiry, your details are sent to our official email via EmailJS
        for response purposes. A confirmation reply may also be sent to you.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        Our website may use basic cookies to improve user experience. These do not collect
        personal data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Consent</h2>
      <p className="mb-4">
        By using our website, you consent to our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates</h2>
      <p className="mb-4">
        We may update this policy from time to time. Changes will be posted on this page.
      </p>

      <p className="mt-6">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default PrivacyPolicy;