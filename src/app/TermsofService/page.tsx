"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assests/srv.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function TermsOfService() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `url(${logo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <main className="py-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <article className="bg-black/30 border border-white/6 rounded-2xl p-8 md:p-12">

            <h1 className="text-3xl font-semibold text-[#ff1f00] mb-6">
              Terms of Service
            </h1>

            <p className="text-white/90 mb-6">
              These Terms of Service govern your use of bim.africa and its
              subdomains, including the instant quotation tool at
              quotation.bim.africa (the “Sites”). By using our Sites, you agree
              to these Terms.
            </p>

            {/* ===================== 1 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">1. Company Information</h2>
            <p className="text-white/90 mb-6">
              BIM Africa is operated by Brand Image Marketer Ltd, a company
              incorporated in Mauritius.
            </p>

            {/* ===================== 2 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">2. Services</h2>
            <p className="text-white/90 mb-4">Our services include, but are not limited to:</p>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>Website Design, Development, Maintenance, and Upgrades.</li>
              <li>Cybersecurity & Threat Management.</li>
              <li>Digital Support Outsourcing.</li>
            </ul>

            {/* ===================== 3 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">
              3. Use of the Instant Quotation Tool
            </h2>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>When using our instant quotation tool at quotation.bim.africa:</li>
              <li>
                You agree to provide accurate contact details.
              </li>
              <li>
               Quotations generated are subject to client onboarding, verification, and acceptance by BIM Africa before becoming binding.
              </li>
              <li>
              Submitting your details does not create a client relationship until we formally accept and onboard you.
              </li>
            </ul>

            {/* ===================== 4 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">4. User Responsibilities</h2>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>You agree not to:</li>
              <li>Misuse or abuse the Sites.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Provide false or misleading information.</li>
            </ul>

            {/* ===================== 5 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">5. Intellectual Property</h2>
            <p className="text-white/90 mb-6">
              All content, branding, designs, and code on the Sites remain the
              property of Brand Image Marketer Ltd and may not be copied,
              distributed, or reused without prior consent.
            </p>

            {/* ===================== 6 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">6. Limitation of Liability</h2>

            <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
              <li>While we strive for accuracy and reliability, BIM Africa shall not be liable for:</li>
              <li>
                Any indirect, incidental, or consequential damages.
              </li>
              <li>Reliance on automated quotations without formal acceptance.</li>
              <li>Interruptions, delays, or errors caused by third-party services.</li>
            </ul>

            {/* ===================== 7 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">7. Data Protection</h2>
            <p className="text-white/90 mb-6">
              We comply with the Mauritius DPA and GDPR. For more details, refer to
              our Privacy Policy.
            </p>

            {/* ===================== 8 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">8. Termination of Use</h2>
            <p className="text-white/90 mb-6">
              We reserve the right to suspend or terminate access to our Sites if we
              detect misuse, policy violations, or unlawful activities.
            </p>

            {/* ===================== 9 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">9. Governing Law</h2>
            <p className="text-white/90 mb-6">
              These Terms shall be governed exclusively by the laws of Mauritius.
            </p>

            {/* ===================== 10 ===================== */}
            <h2 className="text-[#ff1f00] font-semibold mb-2">10. Contact Us</h2>
            <p className="text-white/90 mb-2">For inquiries about these Terms, please contact:</p>
            <p className="text-white/90">
            Email: <span className="text-[#ff1f00]">legal@bim.africa</span>
            </p>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
