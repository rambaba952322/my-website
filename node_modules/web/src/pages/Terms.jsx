import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4">
        Welcome to our Computer Academy. By accessing our website and services,
        you agree to comply with the following terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
      <p className="mb-4">
        We provide computer education and training services across 800+ centers in India.
        Course availability may vary by location.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Responsibility</h2>
      <p className="mb-4">
        Users must provide accurate information while submitting enquiry forms.
        Misuse of the website is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Enquiries</h2>
      <p className="mb-4">
        Submitting an enquiry does not guarantee admission. Our team will contact you
        with further details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website including text, design, and branding belongs to
        our Computer Academy and cannot be reused without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">
        We are not responsible for any direct or indirect damages arising from the use
        of our website or services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">
        We may update these terms at any time. Continued use of the website means
        acceptance of updated terms.
      </p>

      <p className="mt-6">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Terms;