"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assests/srv.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PrivacyPolicy() {
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
                            Privacy Policy
                        </h1>

                        <p className="text-white/90 mb-6">
                            This Privacy Policy applies to BIM Africa, operated by Brand Image
                            Marketer Ltd (“we,” “our,” or “us”), including our primary website
                            bim.africa and all subdomains, such as quotation.bim.africa (the
                            “Sites”). We respect your privacy and are committed to protecting
                            your personal information in compliance with the Mauritius Data
                            Protection Act (DPA) and the EU General Data Protection Regulation
                            (GDPR).
                        </p>

                        {/* ===================== 1 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">1. Information We Collect</h2>
                        <p className="text-white/90 mb-4">
                            We only collect the minimum personal data necessary to provide our
                            services and quotations. This may include:
                        </p>

                        <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
                            <li>
                                <strong>Contact Information:</strong> Full name, company name,
                                email address, phone number, and country.
                            </li>
                            <li>
                                <strong>Quotation Tool Data:</strong> Information you provide
                                through our instant quotation tool at quotation.bim.africa to
                                generate tailored estimates.
                            </li>
                            <li>
                                <strong>Cookies & Analytics:</strong> Limited data (e.g.,
                                browser type, device type, session activity) collected via
                                cookies and analytics tools to improve user experience and
                                website performance. We do not collect IP addresses or
                                unnecessary technical data beyond what is essential.
                            </li>
                        </ul>

                        {/* ===================== 2 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
                            <li>We process your data to:</li>
                            <li>
                                Provide instant quotations and follow up with tailored proposals.
                            </li>
                            <li>Deliver our services, including but not limited to Website Design & Development, Maintenance, Cybersecurity & Threat Management, and Digital Support Outsourcing.
                            </li>
                            <li>Improve our Sites, user experience, and marketing effectiveness.</li>
                            <li>Comply with legal and regulatory obligations.</li>
                        </ul>

                        {/* ===================== 3 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">3. How We Protect Your Data</h2>
                        <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
                            <li>SSL encryption on all Sites and tools.</li>
                            <li>GDPR-compliant data handling and storage.</li>
                            <li>Access to personal data is strictly limited to authorized personnel.</li>
                            <li>Your data is never sold or shared with third parties.</li>
                        </ul>

                        {/* ===================== 4 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">4. Cookies</h2>
                        <p className="text-white/90 mb-4">
                            Our Sites use cookies and similar technologies to:
                        </p>
                        <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
                            <li>Improve user experience.</li>
                            <li>Analyze traffic and performance.</li>
                            <li>Optimize marketing campaigns.</li>
                        </ul>
                        <p className="text-white/90 mb-6">
                            You may disable or manage cookies in your browser settings.
                        </p>

                        {/* ===================== 5 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">5. Data Retention</h2>
                        <p className="text-white/90 mb-6">
                            We retain personal data only as long as necessary to provide our
                            services, comply with legal requirements, or resolve disputes.
                        </p>

                        {/* ===================== 6 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">6. Your Rights</h2>
                        <p className="text-white/90 mb-4">
                            Depending on your jurisdiction (including Mauritius and the EU),
                            you may have the right to:
                        </p>

                        <ul className="list-disc list-inside text-white/90 mb-6 space-y-2">
                            <li>Access, correct, or delete your personal data.</li>
                            <li>Restrict or object to processing.</li>
                            <li>Request data portability.</li>
                            <li>Withdraw consent at any time.</li>
                        </ul>

                        <p className="text-white/90 mb-6">
                            Requests can be made by contacting us at{" "}
                            <span className="text-[#ff1f00]">legal@bim.africa</span>.
                        </p>

                        {/* ===================== 7 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">7. Third-Party Services</h2>
                        <p className="text-white/90 mb-6">
                            We may use secure third-party providers (e.g., analytics, email
                            tools) strictly for operational purposes. They are contractually
                            bound to protect your information.
                        </p>

                        {/* ===================== 8 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">8. Updates to Policy</h2>
                        <p className="text-white/90 mb-6">
                            We may update this Privacy Policy to reflect changes in
                            regulations, technology, or business practices. The updated
                            version will always be available on bim.africa.
                        </p>

                        {/* ===================== 9 ===================== */}
                        <h2 className="text-[#ff1f00] font-semibold mb-2">9. Contact Us</h2>
                        <p className="text-white/90 mb-2">For any privacy-related concerns:</p>
                        <p className="text-white/90">
                            Email:{" "}
                            <span className="text-[#ff1f00]">legal@bim.africa</span>
                        </p>

                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
